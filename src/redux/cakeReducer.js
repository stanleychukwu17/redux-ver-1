const cur_state = {
    'numCakes':30, 'u_all':{'loading':false, 'users':[], 'err_msg':null}
};
const cream_state = {'numCreams':60}

export let cakeReducer = (state = cur_state, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {...state, 'numCakes': state.numCakes - action.payload}
        case 'FETCH_USERS_LOADING' : return {...state, 'u_all':{...state.u_all, 'loading':true, 'err_msg':null}}
        case 'FETCH_USERS_SUCCESS' : return {...state, 'u_all':{...state.u_all, 'loading':false, 'users':action.payload, 'err_msg':null}}
        case 'FETCH_USERS_ERROR' : return {...state, 'u_all':{...state.u_all, 'loading':false, 'err_msg':action.payload}}
        default: return state
    }
}

export let creamReducer = (state = cream_state, action) => {
    switch (action.type) {
        case 'BUY_CREAM': return {...state, 'numCreams': state.numCreams - action.payload}
        default: return state
    }
}