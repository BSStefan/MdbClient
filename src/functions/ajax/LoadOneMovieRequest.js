import axios from 'axios';

export default function LoadOneMovieRequest(id) {

    return dispatch => {
        axios.get('http://mdb.dev/api/user/movie/'+id)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_ONE',
                        payload : {
                            userReaction : response.data.data['user_reaction'],
                            movie        : response.data.data.movie
                        }
                    });
                }
                else {
                    dispatch({
                        type : 'ERROR',
                        payload : response.data.data.movies
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
