import * as Actions from './actions';
import initialState from '../store/initialState';
export const favoritesReducer = (state = initialState.favorites, action) => {
    switch (action.type) {
        case Actions.FETCH_favorite:
            //console.log('action', action);
            console.log('[...state.list.results, action.list]', [...state.results, action.list]);
            return {
                ...state,
                results: action.list.results
            };
        case Actions.ADD_favorite:
            console.log('[...state.list.results, action.list]', [...state.results, action.list]);
            return {
                ...state,
                results: [...state.results, action.list]
            };
        case Actions.DELETE_favorite:
            return {
                ...state,
                list: state.list.filter(fav => fav.id !== action.id)
            };
        default:
            return state;
    }
};
