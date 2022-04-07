import { push } from 'connected-react-router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import commenticon from '../assets/icons/Commenticon.png';
import Favouritepic from '../assets/icons/Favorite.png';
import user1 from '../assets/profileimages/user_1.jpeg';
import { addFavorites, fetchFavorites } from '../reducks/favourite/operations';
import { getFavorites } from '../reducks/favourite/selectors';
import { fetchPosts } from '../reducks/posts/operations';
import { getPosts } from '../reducks/posts/selectors';

const Home = () => {
    const selector = useSelector(state => state);
    const favorites = getFavorites(selector);
    const dispatch = useDispatch();

    const posts = getPosts(selector);
    useEffect(() => {
        dispatch(fetchPosts());
        //dispatch(fetchFavorites());

        // eslint-disable-next-line
    }, []);

    const clickPost = postId => {
        dispatch(addFavorites({ post: postId }));
    };
    return (
        <>
            <div class="feed">
                {posts.results.length &&
                    posts.results.map(post => (
                        <div class="post-body">
                            <div class="post-header">
                                <img
                                    class="profile-picture"
                                    src={post.user ? post.user.profile : ''}
                                    alt="profile picture"
                                />
                                <h3 class="profile-name">
                                    {post.user ? post.user.user_name : ''}
                                    {console.log(post.user)}
                                </h3>
                            </div>
                            <a href="#">
                                <img class="post-picture" src={post.image} alt="post" />
                            </a>

                            <div class="post-footer">
                                {favorites &&
                                favorites.results.length &&
                                favorites.results.map(f => f.post).includes(post.id) ? (
                                    ''
                                ) : (
                                    <input
                                        class="post-favorite"
                                        type="image"
                                        src={Favouritepic}
                                        onClick={() => clickPost(post.id)}
                                    />
                                )}
                                <img
                                    class="commenticon"
                                    src={commenticon}
                                    alt=""
                                    onClick={() => dispatch(push({ pathname: '/comment', state: { postId: post.id } }))}
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Home;
