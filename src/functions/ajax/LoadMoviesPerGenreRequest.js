import axios from 'axios';

export default function LoadMoviesPerGenreRequest(route, number, page=1) {
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
                        type : 'SET_GLOBAL_ERROR',
                        payload : 'There was an error, please try again. :('
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type : 'SET_GLOBAL_ERROR',
                    payload : 'There was an error, please try again. :('
                });
            })
    }
}
