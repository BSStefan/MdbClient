import axios from 'axios';

import setTokenInRequest from './../setTokenInRequest';

export default function AuthRequest(data, route) {
    return dispatch => {
        axios.post('http://mdb.dev/api/auth/mdb/'+route, data)
            .then((response) => {
                if(response.data.error === false){
                    localStorage.setItem('jwtToken', response.data.data.token);
                    localStorage.setItem('name', response.data.data.first_name+'/'+response.data.data.last_name);
                    setTokenInRequest(localStorage.getItem('jwtToken'));
                    dispatch({
                        type : 'LOGIN',
                        payload: {
                            token : response.data.data.token,
                            first_name : response.data.data.first_name,
                            last_name : response.data.data.last_name
                        }
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
                let message = '';
                if(error.response.data.message === 'The given data failed to pass validation.') {
                    message = "Email is already used!"
                }
                dispatch({
                    type : 'ERROR',
                    payload : message
                });
            })
    }
}
