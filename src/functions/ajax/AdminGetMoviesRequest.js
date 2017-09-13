import axios from 'axios';

export default function AdminGetMoviesRequest(route, page) {

    if(route === 'current-in-cinema') {
        route = 'crawler/current-in-cinema';
    }
    else {
        route = 'tmdb/'+route;
    }
    return dispatch => {
        axios.get('http://mdb.dev/api/admin/'+route+'/'+page)
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
                        type : 'ADMIN_LOADER_TURNOFF',
                    });
                    dispatch({
                        type : 'SET_GLOBAL_ERROR',
                        payload : 'There was an error, please try again. :('
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type : 'ADMIN_LOADER_TURNOFF',
                });
                dispatch({
                    type : 'SET_GLOBAL_ERROR',
                    payload : 'There was an error, please try again. :('
                });
            })
    }
}