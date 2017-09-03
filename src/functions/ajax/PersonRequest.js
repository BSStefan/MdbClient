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

