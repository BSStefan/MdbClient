import setTokenInRequest from './setTokenInRequest';

export default function LogOut() {
    return dispatch => {
        localStorage.clear();
        setTokenInRequest();
        dispatch({
            type : 'LOGOUT'
        })
    }

}
