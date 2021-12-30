export const SIGN_UP = 'SIGN_UP';
export const signUpAction = user => {
    return {
        type: 'SIGN_UP',
        payload: user
    };
};
export const SIGN_IN = 'SIGN_IN';
export const signInAction = user => {
    return {
        type: 'SIGN_IN',
        payload: user
    };
};
export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
    return {
        type: 'SIGN_OUT',
        payload: {}
    };
};

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfileAction = user => {
    return {
        type: UPDATE_PROFILE,
        payload: {
            user
        }
    };
};
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
export const updateProfileError = errors => {
    return {
        type: UPDATE_PROFILE_ERROR,
        payload: {
            errors
        }
    };
};

export const GET_PROFILE = 'GET_PROFILE';
export const getProfileAction = profile => {
    return {
        type: GET_PROFILE,
        payload: {
            profile
        }
    }
}