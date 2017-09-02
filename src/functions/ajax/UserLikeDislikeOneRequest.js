import axios from 'axios';


export default function UserLikeDislikeOneRequest(action, id) {

    const data = {
        is_like : action === 'like',
        movie_id : id
    };

    const actionReducer = (action === 'like' ? 'LIKE_ONE_MOVIE' : 'DISLIKE_ONE_MOVIE');

    return dispatch => {
        axios.post('http://mdb.dev/api/user/like-dislike', data)
            .then((response) => {
                if(response.data.error === false && response.data.data.success === true){
                    dispatch({
                        type : actionReducer,
                        payload : {
                            likes : response.data.data.like_dislike.likes,
                            dislikes : response.data.data.like_dislike.dislikes,
                            liked : response.data.data.like_dislike.like,
                            disliked : response.data.data.like_dislike.dislike
                        }
                    });
                }
                else {
                    dispatch({
                        type : 'REACTIONERROR',
                        payload : 'Something is wrong, please try again'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type : 'REACTIONERROR',
                    payload : 'Something is wrong, please try again'
                });
            })
    }
}
