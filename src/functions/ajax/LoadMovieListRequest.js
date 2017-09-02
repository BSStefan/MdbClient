import axios from 'axios';

export default function LoadMovieListRequest(route, number) {
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
        axios.get('http://mdb.dev/api/user/'+route+'/'+number)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : action,
                        payload : response.data.data.movies
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
