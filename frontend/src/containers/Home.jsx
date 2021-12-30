import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPosts } from '../reducks/posts/selectors';
import { fetchPosts } from '../reducks/posts/operations';
import Favouritepic from '../assets/icons/Favorite.png';
import Commentpic from '../assets/icons/Commenticon.png';
import { push } from 'connected-react-router';
import { addFavorites, fetchFavorites } from '../reducks/favourite/operations';
import { getFavorites } from '../reducks/favourite/selectors';
import user1 from '../assets/profileimages/user_1.jpeg';
import commenticon from '../assets/icons/Commenticon.png';
import { LOGIN_USER_KEY } from '../API';

const Home = () => {
    const selector = useSelector(state => state);
    const favorites = getFavorites(selector);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem(LOGIN_USER_KEY));

    const posts = getPosts(selector);
    console.log('FAVposts', favorites);
    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchFavorites());
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
                                <img class="profile-picture" src={user1} alt="profile picture" />
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
