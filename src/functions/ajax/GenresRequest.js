import axios from 'axios';

export default function GenresRequest() {

    return dispatch => {
        axios.get('http://mdb.dev/api/user/genres')
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_GENRES',
                        payload : {
                            genres  : response.data.data
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
