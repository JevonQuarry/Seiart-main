const initialState = {
    posts: {
        results: [],
        detail: {}
    },

    favorites: {
        results: []
    },

    user: {
        user_name: '',
        email: '',
        token: '',
        token_expires_at: ''
    },
    
    comments: {
        results: []
    }
};

export default initialState;
