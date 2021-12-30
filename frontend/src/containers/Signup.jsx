import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import { push } from 'connected-react-router';

const SignUp = () => {
    const dispatch = useDispatch();

    // const closeButton = () => {
    //     dispatch(push('/'));
    // };
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
        dispatch(push('/'));
    };
    return (
        <>
            <div class="user-page">
                <div class="user-info">
                    <form>
                        <div class="user-input">
                            <label>USERNAME</label>
                            <input onChange={inputUserName} type="text" />
                            <label>EMAIL</label> <br />
                            <input onChange={inputEmail} type="email" />
                            <br />
                            <label>PASSWORD</label>
                            <br />
                            <input onChange={inputPassword} type="password" />
                            <input onClick={signUpButton} type="submit" value="LOGIN" />
                            <input type="submit" value="Forgot Login Info" />
                        </div>
                    </form>
                    <h3 class="alert">
                        Don't have an account?
                        <a href="#" onClick={() => dispatch(push('/Signin'))}>
                            <h3>Signin</h3>
                        </a>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default SignUp;
