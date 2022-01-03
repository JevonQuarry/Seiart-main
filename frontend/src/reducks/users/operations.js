import API, { LOGIN_USER_KEY } from '../../API';
import { signInAction, signUpAction, signOutAction, getProfileAction } from './actions';
import { push } from 'connected-react-router';
import { updateProfileAction, updateProfileError } from './actions';

const api = new API();

export const fetchUserFromLocalStorage = () => {
    return async dispatch => {
        const userJSON = localStorage.getItem(LOGIN_USER_KEY);
        if (userJSON && userJSON.token !== '') {
            dispatch(signInAction(JSON.parse(userJSON)));
        }
    };
};

export const signUp = (user_name, email, password) => {
    return async dispatch => {
        // Validation
        if (user_name === '' || email === '' || password === '') {
            alert('Please fill out name, email, and password.');
            return false;
        }

        return api
            .signUp(user_name, email, password)
            .then(user => {
                dispatch(signUpAction(user));
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
                dispatch(push('/'));
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};

export const signIn = (email, password) => {
    return async dispatch => {
        // Validation
        if (email === '' || password === '') {
            alert('Please fill out email and password.');
            return false;
        }

        return api
            .signIn(email, password)
            .then(user => {
                dispatch(signInAction(user));
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
                dispatch(push('/'));
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};

export const signOut = () => {
    return async dispatch => {
        dispatch(signOutAction());
        localStorage.removeItem(LOGIN_USER_KEY);
        dispatch(push('/Signin'));
    };
};

export const updateProfile = (data = {}, id) => {
	return async (dispatch) => {
		return api
			.updateProfile(data, id)
			.then((response) => {
				localStorage.setItem(
					LOGIN_USER_KEY,
					JSON.stringify(response)
				);
                console.log("response",response);
				// dispatch(updateProfileAction(response));
			})
			.catch((error) => {
				dispatch(updateProfileError(error.response.data));
			});
	};
};

export const getProfile = () => {
    return async dispatch => {
        return api.getProfile()
            .then(response => {
                dispatch(getProfileAction(response))
            })
    }
}
