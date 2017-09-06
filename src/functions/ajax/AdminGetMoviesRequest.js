import axios from 'axios';

export default function AdminGetMoviesRequest(route, page) {

    return dispatch => {
        axios.get('http://mdb.dev/api/admin/tmdb/'+route+'/'+page)
            .then((response) => {
                if(response.data.error === false){
                    dispatch({
                        type : 'LOAD_MOVIES',
                        payload : {
                            movies  : response.data.data.movies,
                            currentPage : response.data.data.currentPage,
                            totalPages : response.data.data.totalPages
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