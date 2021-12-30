export const ADD_comment = 'ADD_comment';
export const addCommentAction = comment => {
    return {
        type: 'ADD_comment',
        list: comment
    };
};
export const FETCH_comment = 'FETCH_comment';
export const fetchCommentAction = comments => {
    return {
        type: 'FETCH_comment',
        list: comments
    };
};
export const DELETE_comment = 'DELETE_comment';
export const deleteCommentAction = id => {
    return {
        type: 'DELETE_comment',
        id
    };
};
export const ERRORS_comment = 'ERRORS_comment';
export const errorCommentAction = errors => {
    return {
        type: 'ERRORS_comment',
        payload: { errors }
    };
};
