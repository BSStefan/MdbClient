import axios from 'axios';

export default function MovieProjectionsRequest(movieId, city) {

    return dispatch => {
        axios.get('http://mdb.dev/api/user/movie-cinema/'+movieId+'/'+city)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_PROJECTIONS',
                        payload : {
                            projections  : response.data.data.projections
                        }
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