import axios from 'axios';


export default function LoadMovieList(route, number) {
    return dispatch => {
        axios.get('http://mdb.dev/api/user/'+route+'/'+number)
            .then((response) => {
                if(response.data.error === false){
                    console.log(response.data.data);
                }
                else {
                    console.log(response.data.data);
                }
            })
            .catch((error) => {
                let message = '';
                console.log(error.data);
            })
    }
}
