import axios from 'axios';

export default function GenresRequest() {

    return dispatch => {
        axios.post('http://mdb.dev/api/admin/crawler/current-movies-time')
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'SAVE_PROJECTIONS',
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
