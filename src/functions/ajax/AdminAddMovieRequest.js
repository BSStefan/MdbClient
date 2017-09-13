import axios from 'axios';

export default function AdminAddMovieRequest(id, title) {
    return dispatch => {
        if(id === 0){
            axios.post('http://mdb.dev/api/admin/crawler/current-movie', {title : title})
                .then((response) => {
                    if(response.data.error === false){
                        dispatch({
                            type : 'MOVIES_ADDED',
                            payload : {
                                tmdb_id  : 0,
                                title : response.data.data.movie['title']
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
        else{
            axios.post('http://mdb.dev/api/admin/tmdb/movie'+'/'+id)
                .then((response) => {
                    if(response.data.error === false){
                        dispatch({
                            type : 'MOVIES_ADDED',
                            payload : {
                                tmdb_id  : response.data.data.movie['tmdb_id'],
                                title : response.data.data.movie['title']
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
}
