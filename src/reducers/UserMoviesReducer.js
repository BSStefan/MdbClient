export const UserMoviesReducer  = (
    state={
        movies : [],
        pagination : {}
    }, action) => {
    let newState = {
        movies : [
            ...state.movies
        ]
    };
    switch(action.type){
        case 'LOAD_USER_MOVIES':
            newState = {
                movies : action.payload[0],
                pagination : action.payload[1]
            };
            return newState;
        case 'DESTROY_USER_MOVIES':
            newState = {
                movies : [],
                pagination : {}
            };
            return newState;
        default:
            return state;
    }
};
