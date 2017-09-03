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
                        type : 'ERROR',
                        payload : response.data.message
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type : 'ERROR',
                    payload : ''
                });
            })
    }
}
