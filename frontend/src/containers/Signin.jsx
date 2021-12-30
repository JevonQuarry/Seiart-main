import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from './Home';
import { push } from 'connected-react-router';

const Signin = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
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
                            <label>EMAIL</label>
                            <input onChange={inputEmail} type="email" />
                            <label>PASSWORD</label>
                            <input onChange={inputPassword} type="password" />
                            <input onClick={signInButton} type="submit" value="LOGIN" />
                            <input type="submit" value="Forgot Login Info" />
                        </div>
                    </form>
                    <h3 class="alert">
                        Don't have an account?
                        <a href="#" onClick={() => dispatch(push('/Signup'))}>
                            <h3>Sign Up</h3>
                        </a>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Signin;
