import axios from 'axios';

export let buyCake = (qty = 1) => {
    return {'type': 'BUY_CAKE', 'payload':qty};
}

export let buyCream = (qty = 1) => {
    return {'type': 'BUY_CREAM', 'payload':qty};
}

export let fetch_users_preloading = () => ({'type':'FETCH_USERS_LOADING'})

export let fetch_users_success = (users) => ({'type':'FETCH_USERS_SUCCESS', payload: users})

export let fetch_users_error = (err_msg) => ({'type':'FETCH_USERS_ERROR', payload: err_msg})

export let fetch_all_users = () => {

    return function (dispatch) {
        dispatch(fetch_users_preloading());

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (re => {
            dispatch(fetch_users_success(re.data));
        }).catch(err => {
            dispatch(fetch_users_error(err.message));
        });
    }
}