import axios from 'axios';

export default function LoadMovieListRequest(route, number, page=1, genres=0) {
    let action;
    switch(route){
        case 'new-movies':
            action = 'NEWMOVIES';
            break;
        case 'most-liked':
            action = 'MOSTPOPULAR';
            break;
        case 'recommendation':
            action = 'RECOMMENDATION';
            break;
        case 'per-genre':
            action = 'PER_GENRE';
            route = route+'/'+genres;
            break;
        case 'current-in-cinema':
            action = 'CURRENT_IN_CINEMA';
            break;
        default:
            action = '';
    }
    return dispatch => {
        axios.get('http://mdb.dev/api/user/'+route+'/'+number+'?page='+page)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : action,
                        payload : [response.data.data.movies, response.data.data.paginator]
                    });
                }
                else {
                    dispatch({
                        type : action,
                        payload : response.data.data.movies
                    });
                }
            })
            .catch((error) => {
            console.log(error);
                dispatch({
                    type : 'NEWMOVIES',
                    payload : 'tekst'
                });
            })
    }
}
