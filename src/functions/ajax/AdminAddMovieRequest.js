import axios from 'axios';

export default function AdminAddMovieRequest(id) {
    console.log(id);
    return dispatch => {
        axios.post('http://mdb.dev/api/admin/tmdb/movie'+'/'+id)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'MOVIES_ADDED',
                        payload : {
                            tmdb_id  : response.data.data.movie['tmdb_id'],
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
