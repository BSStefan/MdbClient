// import axios from 'axios';
//
// export default function LoadMovieListRequest(route, number) {
//     let action;
//     switch(route){
//         case 'new-movies':
//             action = 'NEW_MOVIES_PAGE';
//             break;
//         case 'most-liked':
//             action = 'MOST_POPULAR_PAGE';
//             break;
//         case 'recommendation':
//             action = 'RECOMMENDATION_PAGE';
//             break;
//         default:
//             action = '';
//     }
//     return dispatch => {
//         axios.get('http://mdb.dev/api/user/'+route+'/'+number)
//             .then((response) => {
//                 if(response.data.error === false){
//                     dispatch({
//                         type : action,
//                         payload : [response.data.data.movies, response.data.data.paginator]
//                     });
//                 }
//                 else {
//                     dispatch({
//                         type : action,
//                         payload : [response.data.data.movies, response.data.data.paginator]
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//                 dispatch({
//                     type : 'NEWMOVIES',
//                     payload : 'tekst'
//                 });
//             })
//     }
// }