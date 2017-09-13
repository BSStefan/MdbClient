import axios from 'axios';

export default function GenresRequest() {

    return dispatch => {
        axios.post('http://mdb.dev/api/admin/crawler/current-movies')
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'SAVE_MOVIES_IN_CINEMA',
                        payload : {
                            movies  : response.data.data
                        }
                    });
                }
                else {
                    dispatch({
                        type : 'ADMIN_LOADER_TURNOFF',
                    });
                    dispatch({
                        type : 'SET_GLOBAL_ERROR',
                        payload : 'There was an error, please try again. :('
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type : 'ADMIN_LOADER_TURNOFF',
                });
                dispatch({
                    type : 'SET_GLOBAL_ERROR',
                    payload : 'There was an error, please try again. :('
                });
            })
    }
}
