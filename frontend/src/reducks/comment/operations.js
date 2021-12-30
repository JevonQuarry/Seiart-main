import API from '../../API';
import comment from '../../components/Common/Comment';
import { addCommentAction, fetchCommentAction, deleteCommentAction, errorCommentAction } from './actions';
const api = new API();

export const fetchComments = () => {
    return async dispatch => {
        return api.getComments().then(comments => {
            dispatch(fetchCommentAction(comments));
        });
    };
};
export const addComments = addCommentBody => {
    return async dispatch => {
        return api
            .addComments(addCommentBody)
            .then(home => {
                dispatch(addCommentAction(comment));
            })
            .catch(errors => {
                dispatch(errorCommentAction(errors));
            });
    };
};
export const deleteComments = id => {
    return async dispatch => {
        return api
            .deleteComments(id)
            .then(comments => {
                dispatch(deleteCommentAction(id));
            })
            .catch(errors => {
                dispatch(errorCommentAction(errors));
            });
    };
};
