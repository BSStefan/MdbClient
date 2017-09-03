export const GenresReducer  = (
    state={
        genres : [],
    }, action) => {
    let newState = {
        genres : [
            ...state.genres,
        ]
    };
    switch(action.type){
        case 'LOAD_GENRES':
            newState = {
                genres : action.payload.genres,
            };
            return newState;
        default:
            return state;
    }
};

