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
