import axios from 'axios';

export default function LoadInfoRequest() {

    return dispatch => {
        axios.get('http://mdb.dev/api/admin/info')
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_INFO',
                        payload : {
                            info : response.data.data
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