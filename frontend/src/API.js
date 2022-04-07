import axios from 'axios';
export const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = 'https://backend-seiart.herokuapp.com/';
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    //////////////////////////////
    // USERS
    /////////////////////////////

    getProfile = async () => {
        return api
            .get('users/profile', {
                requireToken: true
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                alert('error users/profile');
            });
    };

    signUp = async (user_name, email, password) => {
        const savedPost = await api
            .post('/users/signup/', {
                user_name: user_name,
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    signIn = async (email, password) => {
        const savedPost = await api
            .post('/users/signin/', {
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    getUsers = async () => {
        const posts = await api
            .get('/users/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return posts;
    };

    updateProfile = async (updateProfileBody, id) => {
        const formData = new FormData();
        for (const key in updateProfileBody) {
            formData.append(key, updateProfileBody[key]);
        }
        return api
            .put(`/users/update/${id}/`, formData, { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
    };
    //////////////////////////////
    // posts
    /////////////////////////////

    getPosts = async () => {
        const posts = await api
            .get('/posts/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return posts;
    };

    getPost = async id => {
        return api
            .get(`/posts/detail/${id}/`, { requireToken: true })
            .then(response => {
                return response.data[0];
            })
            .catch(error => {
                throw new Error(error);
            });
    };

    addPost = async (name, image) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        console.log('{ name, image }', { name, image });
        const savedPost = await api
            .post('/posts/add/', formData, { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    deletePost = async id => {
        const response = await api
            .delete('/posts/delete/' + id + '/', { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return response;
    };

    ///////////////////////////////////////////
    //Favorite
    //////////////////////////////////////////
    getFavorites = async () => {
        const favorites = await api
            .get('/favorites/', { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return favorites;
    };

    addFavorites = async addFavoriteBody => {
        //{homeId: homeId} = {homeId}
        const savedPost = await api
            .post('/favorites/add/', addFavoriteBody, { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    deleteFavorites = id => {
        return api.delete(`favorites/delete/${id}`, { requireToken: true });
    };

    //     ///////////////////////////////////////////
    //     //Comment
    //     //////////////////////////////////////////
    //     getComments = (query = {}) => {
    //         return api.get('/comments', { params: query, requireToken: true });
    //     };

    //     getComments = async () => {
    //         const comments = await api
    //             .get('/comments/')
    //             .then(response => {
    //                 return response.data;
    //             })
    //             .catch(error => {
    //                 throw new Error(error);
    //             });
    //         return comments;
    //     };
    //     addComments = async addCommentBody => {
    //         const savedPost = await api
    //             .post('/comments/add/', addCommentBody, { requireToken: true })
    //             .then(response => {
    //                 return response.data;
    //             })
    //             .catch(error => {
    //                 throw new Error(error);
    //             });
    //         return savedPost;
    //     };
    //     deleteComments = id => {
    //         return api.delete(`comments/delete/${id}`, { requireToken: true });
    //     };
}
