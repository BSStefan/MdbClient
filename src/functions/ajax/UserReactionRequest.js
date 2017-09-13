import axios from 'axios';


export default function UserReactionRequest(object, list) {
    let action;
    let route;
    let data;
    let fields;
    switch(object.action){
        case 'like':
            action = 'LIKE';
            route = 'like-dislike';
            fields = ['like_dislike', 'is_like'];
            data = {
                movie_id : object.id,
                is_like : true
            };
            break;
        case 'dislike':
            action = 'DISLIKE';
            route = 'like-dislike';
            fields = ['like_dislike', 'is_like'];
            data = {
                movie_id : object.id,
                is_like : false
            };
            break;
        case 'watchlist':
            action = 'WATCHLIST';
            route = 'watched-to-be-watched';
            fields = ['like_dislike', 'is_like'];
            data = {
                movie_id : object.id,
                to_be_watched: true
            };
            break;
    }
    return dispatch => {
        axios.post('http://mdb.dev/api/user/'+route, data)
            .then((response) => {
                if(response.data.error === false && response.data.data.success === true){
                    dispatch({
                        type : action,
                        payload : {
                            movie_id : response.data.data[fields[0]]['movie_id'],
                            list : list,
                            likes : response.data.data[fields[0]].likes,
                            dislikes : response.data.data[fields[0]].dislikes,
                            liked : response.data.data.like_dislike.like,
                            disliked : response.data.data.like_dislike.dislike
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
                dispatch({
                    type : 'SET_GLOBAL_ERROR',
                    payload : 'There was an error, please try again. :('
                });
            })
    }
}
