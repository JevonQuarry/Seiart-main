import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import commentimg from '../assets/icons/Commenticon.png';
import { fetchFavorites } from '../reducks/favourite/operations';
import { getFavorites } from '../reducks/favourite/selectors';
import { getPosts } from '../reducks/posts/selectors';

function Favourite() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favorites = getFavorites(selector);
    const post = getPosts;
    useEffect(() => {
        dispatch(fetchFavorites());
    }, []);
    return (
        <>
            <div class="feed">
                {favorites &&
                    post &&
                    favorites.results.map(favorite => (
                        <div class="myfav-body">
                            <a href="#">
                                <img class="myfav-picture" src={favorite.post.image} alt="myfavorite" />
                            </a>
                            <input class="myfav-post" type="image" src={commentimg} />
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Favourite;
