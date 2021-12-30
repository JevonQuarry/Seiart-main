import { createSelector } from 'reselect';
const favoritesSelector = state => state.favorite;
export const getFavorites = createSelector([favoritesSelector], state => state);
