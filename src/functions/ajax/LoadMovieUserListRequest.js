import axios from 'axios';

export default function LoadMovieUserListRequest(route, number, page=1) {
    switch (route) {
        case 'liked-movies':
            route = 'like-dislike/like';
            break;
        case('watchlist'):
            route = 'watched-to-be-watched/watchlist';
            break;
    }
    return dispatch => {
        axios.get('http://mdb.dev/api/user/'+route+'/'+number+'?page='+page)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_USER_MOVIES',
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