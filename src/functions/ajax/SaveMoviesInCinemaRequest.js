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
                        type : 'ERROR'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type : 'ERROR',
                    payload : 'tekst'
                });
            })
    }
}
