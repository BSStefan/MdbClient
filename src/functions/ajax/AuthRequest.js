import React from 'react';
import axios from 'axios';

export default function AuthRequest(data, route) {
    return dispatch => {
        axios.post('http://mdb.dev/api/auth/mdb/'+route, data)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOGIN',
                        payload: {
                            'first_name' : response.data.data.first_name,
                            'last_name' : response.data.data.last_name
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
