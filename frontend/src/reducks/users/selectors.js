import { createSelector } from 'reselect';
const userSelector = state => state.user;
export const getUsers = createSelector([userSelector], state => state);
