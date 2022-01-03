import { push } from 'connected-react-router';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import addImg from '../assets/icons/Add.png';
import userImg from '../assets/icons/User.png';
import { getUsers } from '../reducks/users/selectors';

function Post() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUsers(selector);

    return (
        <>
            <div class="myprofile">
                <img class="myprofile-picture" src={user.profile ? user.profile : userImg} alt="Upload" />
                <h1 class="myprofile-name">{user.user_name}</h1>
            </div>
            <div class="feed">
                <div class="new-post">
                    <input class="newpost-icon" type="image" src={addImg} onClick={() => dispatch(push('/Addpost'))} />
                </div>
            </div>
        </>
    );
}

export default Post;
