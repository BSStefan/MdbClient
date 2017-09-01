export const MovieListReducer  = (
    state={
        recommendation : [],
        newMovies : [],
        mostPopular : [],
        perGenre : [],
        currentInCinema : [],
    }, action) => {
    let newState = {
        recommendation : [...state.recommendation],
        newMovies : [...state.newMovies],
        mostPopular : [...state.mostPopular],
        perGenre : [...state.perGenre],
        currentInCinema : [...state.currentInCinema]
    };
    switch(action.type){
        case 'RECOMMENDATION':
            newState = {
                ...newState,
                recommendation : action.payload,
            };
            return newState;
        case 'NEWMOVIES':
            console.log('ste');
            newState = {
                ...newState,
                newMovies : action.payload,
            };
            return newState;
        case 'MOSTPOPULAR':
            newState = {
                ...newState,
                mostPopular : action.payload,
            };
            return newState;
        case 'PERGENRE':
            newState = {
                ...newState,
                perGenre : action.payload,
            };
            return newState;
        case 'CURRENTINCINEMA':
            newState = {
                ...newState,
                currentInCinema : action.payload,
            };
            return newState;
        default:
            return state;
    }
};

