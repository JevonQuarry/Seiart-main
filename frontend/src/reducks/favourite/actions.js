export const ADD_favorite = 'ADD_favorite';
export const addFavoriteAction = favorite => {
    return {
        type: 'ADD_favorite',
        list: favorite
    };
};
export const FETCH_favorite = 'FETCH_favorite';
export const fetchFavoriteAction = favorites => {
    return {
        type: 'FETCH_favorite',
        list: favorites
    };
};
export const DELETE_favorite = 'DELETE_favorite';
export const deleteFavoriteAction = id => {
    return {
        type: 'DELETE_favorite',
        id
    };
};
export const ERRORS_favorite = 'ERRORS_favorite';
export const errorFavoriteAction = errors => {
    return {
        type: ERRORS_favorite,
        payload: { errors }
    };
};
