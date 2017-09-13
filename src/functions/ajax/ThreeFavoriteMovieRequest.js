import axios from 'axios';

export default function ThreeFavoriteMovieRequest(data) {
    return dispatch => {
        axios.post('http://mdb.dev/api/user/register-movies', data)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'SET_FAVORITE_REGISTER',
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
                dispatch({
                    type : 'SET_GLOBAL_ERROR',
                    payload : 'There was an error, please try again. :('
                });
            })
    }
}
