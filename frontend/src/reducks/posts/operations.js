import API from '../../API';
import { fetchPostsAction, addPostAction, deletePostAction, fetchPostDetailAction } from './actions';

const api = new API();

export const fetchPosts = () => {
    return async dispatch => {
        return api
            .getPosts()
            .then(posts => {
                dispatch(fetchPostsAction(posts));
            })
            .catch(error => {
                console.log('er', error);
                alert('Failed to connect API: /posts/');
            });
    };
};
export const fetchPostDetail = id => {
    return async dispatch => {
        return api
            .getPost(id)
            .then(post => {
                dispatch(fetchPostDetailAction(post));
            })
            .catch(error => {
                console.log('er', error);
                alert('Failed to connect API: /post/');
            });
    };
};

export const deletePost = id => {
    return async (dispatch, getState) => {
        return api
            .deletePost(id)
            .then(response => {
                const prevPosts = getState().posts.list;
                const nextPosts = prevPosts.filter(post => post.id !== id);
                dispatch(deletePostAction(nextPosts));
            })
            .catch(error => {
                alert('Failed to connect API to delete a post');
                console.log(error);
            });
    };
};

export const addPost = (name, image) => {
    return async (dispatch) => {
        // Validation
        if (name === '' || image === '') {
            alert('Please fill out name and body.');
            return false;
        }
        console.log("imageeeeeeee", image);
        return api
            .addPost(name, image)
            .then(post => {
                //const prevPosts = getState().posts.list;
                //const nextPosts = [post, ...prevPosts];
                dispatch(addPostAction(post));
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};
