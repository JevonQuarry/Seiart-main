export const ADD_POST = 'ADD_POST';
export const addPostAction = post => {
    return {
        type: ADD_POST,
        payload: { post }
    };
};
export const FETCH_POST = 'FETCH_POST';
export const fetchPostsAction = posts => {
    return {
        type: FETCH_POST,
        payload: { posts }
    };
};
export const DELETE_POST = 'DELETE_POST';
export const deletePostAction = postId => {
    return {
        type: DELETE_POST,
        payload: { postId }
    };
};
export const FETCH_POST_DETAIL = 'FETCH_POST_DETAIL';
export const fetchPostDetailAction = post => {
    return {
        type: FETCH_POST_DETAIL,
        payload: { post }
    };
};
