export const AuthReducer  = (
    state={
        isAuth: false,
        redirect: false,
        user: {},
        error : '',
        loader : false
    }, action) => {
        let newState = {
            isAuth : false,
            redirect : false,
            error : '',
            user : {},
            loader : false
        };
        switch(action.type){
            case 'LOGIN':
                newState = {
                    isAuth : true,
                    redirect : true,
                    user : action.payload,
                    error : '',
                    loader : false
                };
                return newState;
            case 'ERROR': {
                newState = {
                    isAuth : false,
                    redirect : false,
                    user : {},
                    error : action.payload,
                    loader : false
                };
                return newState;
            }
            case 'LOGOUT':
                newState = {
                    isAuth : false,
                    redirect : false,
                    user : {},
                    error : '',
                    loader : false
                };
                return newState;
            case 'LOADER':
                newState = {
                    isAuth : false,
                    redirect : false,
                    user : {},
                    error : '',
                    loader : true
                };
                return newState;
            default:
                return state;
        }
};
