export const MovieListReducer  = (
    state={
        recommendation : [],
        newMovies : [],
        mostPopular : [],
        perGenre : [],
        currentInCinema : [],
        pagination : {}
    }, action) => {
    let newState = {
        recommendation : [...state.recommendation],
        newMovies : [...state.newMovies],
        mostPopular : [...state.mostPopular],
        perGenre : [...state.perGenre],
        currentInCinema : [...state.currentInCinema],
        pagination : {
            ...state.pagination
        }
    };
    switch(action.type){
        case 'RECOMMENDATION':
            newState = {
                ...newState,
                recommendation : action.payload[0],
                pagination: action.payload[1]
            };
            return newState;
        case 'NEWMOVIES':
            newState = {
                ...newState,
                newMovies : action.payload[0],
                pagination: action.payload[1]
            };
            return newState;
        case 'MOSTPOPULAR':
            newState = {
                ...newState,
                mostPopular : action.payload[0],
                pagination: action.payload[1]
            };
            return newState;
        case 'PER_GENRE':
            newState = {
                ...newState,
                perGenre : action.payload[0],
                pagination: action.payload[1]
            };
            return newState;
        case 'CURRENT_IN_CINEMA':
            newState = {
                ...newState,
                currentInCinema : action.payload[0],
                pagination: action.payload[1]
            };
            return newState;
        case 'LIKE':
            let newList = handleReaction(
                newState[action.payload.list],
                action.payload.movie_id,
                action.payload.likes,
                action.payload.dislikes,
                action.payload.liked,
                action.payload.disliked,
                action.payload.list === 'mostPopular'
            );

            newState = {
                ...newState,
            };
            newState[action.payload.list] = newList;
            return newState;
        case 'DISLIKE':
            handleReaction(
                newState[action.payload.list],
                action.payload.movie_id,
                action.payload.likes,
                action.payload.dislikes,
                action.payload.liked,
                action.payload.disliked,
                action.payload.list === 'mostPopular'
            );

            newState = {
                ...newState
            };
            return newState;
        default:
            return state;
    }
};

const handleReaction = (oldState, movieId, numberOfLikes, numberOfDislikes, liked, disliked, sort ) => {
    let newState = [...oldState];

    newState.map((movie) => {
        if(movie.movie.id === movieId){
            movie.movie.likes = numberOfLikes;
            movie.movie.dislikes = numberOfDislikes;
            movie.user_reaction['liked'] = liked;
            movie.user_reaction['disliked'] = disliked;
            }
            return movie;
    });
    if(sort){
        newState.sort(function (a, b) {
            if(a['movie']['likes'] < b['movie']['likes']){
                return 1;
            }
            else{
                return -1;
            }
        });
    }

    return newState;
};

