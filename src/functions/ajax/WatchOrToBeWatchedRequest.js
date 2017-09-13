import axios from 'axios';

export default function WatchOrToBeWatchedRequest(action, id) {

    const data = {
        to_be_watched : action,
        movie_id : id
    };

    return dispatch => {
        axios.post('http://mdb.dev/api/user/watched-to-be-watched', data)
            .then((response) => {
                if(response.data.error === false && response.data.data.success === true){
                    dispatch({
                        type : 'WATCHLIST_ONE_MOVIE',
                        payload : {
                            to_be_watched : response.data.data.to_be_watched,
                            already_watched : response.data.data.already_watched,
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
