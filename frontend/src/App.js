import React, { useEffect, useState } from 'react';
import Router from './Router';
import { useDispatch, useSelector } from 'react-redux';
import './assets/style.css';
import Header from './components/Common/Header';
import { getUsers } from './reducks/users/selectors';
import { fetchUserFromLocalStorage } from './reducks/users/operations';

let pageUrl = window.location.toString();

function App() {
    const [showFooter, setShowFooter] = useState(true);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUsers(selector);

    useEffect(() => {
        if (pageUrl.includes('Shipping') || pageUrl.includes('order-confirmation')) {
            setShowFooter(false);
        }
        dispatch(fetchUserFromLocalStorage());
    }, []);
    return (
        <>
            <Header />
            <Router />
        </>
    );
}

export default App;
