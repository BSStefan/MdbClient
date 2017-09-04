import axios from 'axios';

export default function MovieProjectionsRequest(movieId, city) {

    return dispatch => {
        axios.get('http://mdb.dev/api/user/movie-cinema/'+movieId+'/'+city)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_PROJECTIONS',
                        payload : {
                            projections  : response.data.data.projections
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
                    type : 'ERROR1'
                });
            })
    }
}