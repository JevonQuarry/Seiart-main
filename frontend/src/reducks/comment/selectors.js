import { createSelector } from 'reselect';
const commentsSelector = state => state.comment;
export const getcomments = createSelector([commentsSelector], state => state);
