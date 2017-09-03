// export const MovieListPageReducer  = (
//     state={
//         movies : [],
//         pagination : {}
//     }, action) => {
//     let newState = {
//         movies : [
//             ...state.movies
//         ],
//         pagination : {
//             ...state.pagination
//         }
//     };
//     switch(action.type){
//         case 'RECOMMENDATION':
//             newState = {
//                 ...newState,
//                 recommendation : action.payload
//             };
//             return newState;
//         case 'NEWMOVIES':
//             newState = {
//                 ...newState,
//                 newMovies : action.payload,
//             };
//             return newState;
//         case 'MOSTPOPULAR':
//             newState = {
//                 ...newState,
//                 mostPopular : action.payload,
//             };
//             return newState;
//         case 'PERGENRE':
//             newState = {
//                 ...newState,
//                 perGenre : action.payload,
//             };
//             return newState;
//         case 'CURRENTINCINEMA':
//             newState = {
//                 ...newState,
//                 currentInCinema : action.payload,
//             };
//             return newState;
//         case 'LIKE':
//             let newList = handleReaction(
//                 newState[action.payload.list],
//                 action.payload.movie_id,
//                 action.payload.likes,
//                 action.payload.dislikes,
//                 action.payload.liked,
//                 action.payload.disliked
//             );
//
//             newState = {
//                 ...newState,
//             };
//             newState[action.payload.list] = newList;
//             return newState;
//         case 'DISLIKE':
//             handleReaction(
//                 newState[action.payload.list],
//                 action.payload.movie_id,
//                 action.payload.likes,
//                 action.payload.dislikes,
//                 action.payload.liked,
//                 action.payload.disliked
//             );
//
//             newState = {
//                 ...newState
//             };
//             return newState;
//         default:
//             return state;
//     }
// };
//
// const handleReaction = (oldState, movieId, numberOfLikes, numberOfDislikes, liked, disliked ) => {
//     let newState = [...oldState];
//
//     newState.map((movie) => {
//         if(movie.movie.id === movieId){
//             movie.movie.likes = numberOfLikes;
//             movie.movie.dislikes = numberOfDislikes;
//             movie.user_reaction['liked'] = liked;
//             movie.user_reaction['disliked'] = disliked;
//         }
//         return movie;
//     });
//
//     newState.sort(function (a, b) {
//         if(a['movie']['likes'] < b['movie']['likes']){
//             return 1;
//         }
//         else{
//             return -1;
//         }
//     });
//     return newState;
// };
