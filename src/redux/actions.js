export let buyCake = (qty = 1) => {
    return {'type': 'BUY_CAKE', 'payload':qty};
}

export let buyCream = (qty = 1) => {
    return {'type': 'BUY_CREAM', 'payload':qty};
}

export let fetch_users_preloading = () => {
    return {'loading_users':true}
}

export let fetch_users_successful = (users) => ({'loading_users':false, payload: users})