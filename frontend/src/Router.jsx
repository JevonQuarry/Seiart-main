import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Artview from './containers/Artview';
import Home from './containers/Home';
import Login from './containers/Signin';
import Favorite from './containers/Favorite';
import Profile from './containers/Profile';
import Post from './containers/Post';
import Addpost from './containers/Addpost';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Comment from './components/Common/Comment';

import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getUsers } from './reducks/users/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUsers(selector);
    const token = user ? user.token : null;
    console.log('Token', token);
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
    }, []);
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Artview'} component={Artview} />
                <Route exact path={'/Signin'} component={Signin} />
                <Route exact path={'/Favorite'} component={Favorite} />
                <Route exact path={'/Profile'} component={Profile} />
                <Route exact path={'/Post'} component={Post} />
                <Route exact path={'/Addpost'} component={Addpost} />
                <Route exact path={'/Signup'} component={Signup} />
                <Route exact path={'/Comment'} component={Comment} />
            </Switch>
        </>
    );
};
export default Router;
