import React, { useRef, useEffect, useState } from 'react';
import userImg from '../assets/icons/User.png';
import addImg from '../assets/icons/Add.png';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../reducks/users/selectors';
import { updateProfile } from '../reducks/users/operations';

function Post() {
    const dispatch = useDispatch();

    return (
        <>
            <div class="myprofile">
                <img class="myprofile-picture" src={userImg} alt="Upload" />
                <h1 class="myprofile-name">UserName</h1>
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
