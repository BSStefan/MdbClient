import axios from 'axios';

export default function PersonRequest(role, id) {

    return dispatch => {
        axios.get('http://mdb.dev/api/user/'+role+'/'+id)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_PERSON',
                        payload : {
                            person  : response.data.data[role]
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

