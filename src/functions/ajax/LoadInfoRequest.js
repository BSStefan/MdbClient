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
                        type : 'ERROR1'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type : 'ERROR1',
                    payload : 'tekst'
                });
            })
    }
}