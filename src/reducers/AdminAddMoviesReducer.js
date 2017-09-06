export const AdminAddMoviesReducer  = (
    state={
        movies : [],
        currentPage : 0,
        totalPages : 0,
        loader : true
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
                movies : action.payload.movies,
                currentPage : action.payload.currentPage,
                totalPages : action.payload.totalPages,
                loader: false
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
                    if(movie['tmdb_id'] === action.payload.tmdb_id) {
                        movie['exists'] = true;
                    }
                    return movie;
                });
            newState.movies = newState1;
            newState.loader = false;
            return newState;
        default:
            return state;
    }
};
