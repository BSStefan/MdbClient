export const MovieOneReducer  = (
    state={
       movie : {
           details  : {},
           director : [],
           actors   : [],
           writers  : [],
           genres   : [],
           keywords : [],
           likes    : 0,
           dislikes : 0
       },
       userReaction  : {
           liked     : false,
           disliked  : false,
           watched   : false,
           watchlist : false
       }
    }, action) => {
    let newState = {
        userReaction : {
            ...state.userReaction
        },
        movie : {
            ...state.movie,
            details  : {...state.movie.details},
            director : [...state.movie.director],
            actors   : [...state.movie.actors],
            writers  : [...state.movie.writers],
            genres   : [...state.movie.genres],
            keywords : [...state.movie.keywords]
        }
    };
    switch(action.type){
        case 'LOAD_ONE':
            newState = {
                userReaction : action.payload.userReaction,
                movie        : action.payload.movie
            };
            return newState;
        case 'DESTROY_ONE':
            newState={
                movie : {
                    details  : {},
                    director : [],
                    actors   : [],
                    writers  : [],
                    genres   : [],
                    keywords : [],
                    likes    : 0,
                    dislikes : 0
                },
                userReaction  : {
                    liked     : false,
                    disliked  : false,
                    watched   : false,
                    watchlist : false
                }
            };
            return newState;
        case 'LIKE_ONE_MOVIE':
            newState = {
                ...newState,
            };
            newState['movie']['likes'] = action.payload.likes;
            newState['movie']['dislikes'] = action.payload.dislikes;
            newState['userReaction']['liked'] = action.payload.liked;
            newState['userReaction']['disliked'] = action.payload.disliked;

            return newState;
        case 'DISLIKE_ONE_MOVIE':
            newState = {
                ...newState,
            };
            newState['movie']['dislikes'] = action.payload.dislikes;
            newState['movie']['likes'] = action.payload.likes;
            newState['userReaction']['liked'] = action.payload.liked;
            newState['userReaction']['disliked'] = action.payload.disliked;

            return newState;
        case 'WATCHLIST_ONE_MOVIE':
            newState['userReaction']['watched'] = action.payload.already_watched;
            newState['userReaction']['watchlist'] = action.payload.to_be_watched;
            return newState;
        default:
            return state;
    }
};
