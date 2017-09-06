export const AdminAddMoviesReducer  = (
    state={
        movies : [],
        currentPage : 0,
        totalPages : 0,
        loader : false,
        info: {},
        projections : {
            movies : [],
            movies_msg : false,
            projections_msg: false
        }
    }, action) => {
    let newState = {
        ...state,
        movies : [
            ...state.movies,
        ]
    };
    switch(action.type){
        case 'LOAD_MOVIES':
            newState = {
                ...newState,
                movies : action.payload.movies,
                currentPage : action.payload.currentPage,
                totalPages : action.payload.totalPages,
                loader: false,
                info : {}
            };
            return newState;
        case 'ADMIN_LOADER' :
            newState ={
                ...newState,
                loader : true
            };
            return newState;
        case 'MOVIES_ADDED':
            let newState1 = newState.movies.map((movie) => {
                if(action.payload.tmdb_id === 0) {
                    if(movie['title'] === action.payload.title) {
                        movie['exists'] = true;
                    }
                    return movie;
                }
                else {
                    if(movie['tmdb_id'] === action.payload.tmdb_id) {
                        movie['exists'] = true;
                    }
                    return movie;
                }
                });
            newState.movies = newState1;
            newState.loader = false;
            return newState;
        case 'LOAD_INFO':
            newState = {
                ...newState,
                info : action.payload.info
            };
            return newState;
        case 'DESTROY_INFO':
            newState = {
                ...newState,
                info : {}
            };
            return newState;
        case 'SAVE_MOVIES_IN_CINEMA':
            newState = {
                ...newState,
                projections : {
                    movies : action.payload.movies,
                    movies_msg : 'Success',
                    projections_msg: false
                },
                loader: false
            };
            return newState;
        case 'SAVE_PROJECTIONS':
            newState = {
                ...newState,
                projections : {
                    movies : newState.projections.movies,
                    movies_msg : false,
                    projections_msg: 'Projections saved'
                },
                loader: false
            };
            return newState;
        case 'DESTROY_PROJECTIONS':
            newState = {
                ...newState,
                projections : {
                    movies : [],
                    movies_msg : false,
                    projections_msg: false
                }
            };
            return newState;
        case 'ADMIN_LOADER_TURNOFF':
            newState = {
                ...newState,
                loader:false
                };
            return newState;
        default:
            return state;
    }
};
