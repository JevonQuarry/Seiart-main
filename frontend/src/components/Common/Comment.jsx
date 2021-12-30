import { push } from 'connected-react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import favoriteicon from '../../assets/icons/MyFavorite.png';
import senticon from '../../assets/icons/send_6.svg';
import user1 from '../../assets/profileimages/user_1.jpeg';
import { fetchPostDetail } from '../../reducks/posts/operations';
import { getPosts } from '../../reducks/posts/selectors';

function Comment() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const post = getPosts(selector);
    const history = useHistory();
    const { postId } = history.location.state;

    useEffect(() => {
        dispatch(fetchPostDetail(postId));
    }, []);
    console.log("post", post.detail);
    console.log("postId", postId);
    return (
        <>
            <div class="art-view">
                {post.detail && (
                    <div class="art-body">
                        <img class="art" src={post.detail.image} alt="art" />

                        <div class="art-info">
                            <div class="art-profile">
                                <img class="userprofile" src={user1} alt="profile" />
                            </div>

                            <div class="art-text">
                                <h2 class>
                                    {post.detail.body ? post.detail.body : ''}
                                </h2>
                                <h3>
                                    {post.detail.user ? post.detail.user.user_name : ''}
                                </h3>
                            </div>
                            <input
                                class="post-favorite"
                                type="image"
                                src={favoriteicon}
                                alt="favorite"
                                onClick={() => dispatch(push('/favorite'))}
                            />
                        </div>
                    </div>
                )}
                {/* this is where you map comments using post.detail */}
                <div class="comment-section">
                    <div class="comment-header">
                        <div class="commentprofile">
                            <img class="profile-picture1" src={user1} alt="profile pciture" />
                            <input class="comment-input" placeholder="very nice !" type="text" />
                            <img class="comment-sent" src={senticon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;
