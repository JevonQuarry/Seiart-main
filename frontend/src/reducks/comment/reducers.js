import * as Actions from './actions';
import initialState from '../store/initialState';
export const commentsReducer = (state = initialState.comments, action) => {
    switch (action.type) {
        case Actions.FETCH_comment:
            console.log('[...state.list.results, action.list]', [...state.results, action.list]);
            return {
                ...state,
                results: action.list.results
            };
        case Actions.ADD_comment:
            console.log('[...state.list.results, action.list]', [...state.results, action.list]);
            return {
                ...state,
                results: [...state.results, action.list]
            };
        case Actions.DELETE_comment:
            return {
                ...state,
                list: state.list.filter(coment => coment.id !== action.id)
            };
        default:
            return state;
    }
};
