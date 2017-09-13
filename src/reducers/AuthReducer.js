export const AuthReducer  = (
    state={
        isAuth: false,
        redirect: false,
        user: {},
        error : '',
        loader : false,
        movies : false,
        movies_redirect : false
    }, action) => {
        let newState = {
            ...state,
            user : {
                ...state.user
            }
        };
        switch(action.type){
            case 'LOGIN':
                let movies = state.movies;
                let movies_redirect = state.movies_redirect;
                if(action.payload.action === 'register') {
                    movies = false;
                    movies_redirect = false;
                }
                newState = {
                    isAuth : true,
                    redirect : true,
                    user : {
                        token : action.payload.token,
                        first_name : action.payload.first_name,
                        last_name : action.payload.last_name,
                        is_admin: action.payload.is_admin
                    },
                    error : '',
                    loader : false,
                    movies : movies,
                    movies_redirect : movies_redirect
                };
                return newState;
            case 'ERROR': {
                newState = {
                    isAuth : false,
                    redirect : false,
                    user : {},
                    error : action.payload,
                    loader : false,
                    movies : true,
                    movies_redirect : true
                };
                return newState;
            }
            case 'LOGOUT':
                newState = {
                    isAuth : false,
                    redirect : false,
                    user : {},
                    error : '',
                    loader : false,
                    movies : false,
                    movies_redirect : false
                };
                return newState;
            case 'LOADER':
                newState = {
                    ...newState,
                    loader : true
                };
                return newState;
            case 'SET_FAVORITE_REGISTER' :
                newState = {
                    ...newState,
                    movies : true,
                    movies_redirect : true
                };
                return newState;
            case 'RESTART_ERROR' :
                newState = {
                    ...newState,
                    error: ''
                };
                return newState;
            default:
                return state;
        }
};
