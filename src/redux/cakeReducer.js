const cur_state = {
    'numCakes':30, 'numCreams':50
};

export let cakeReducer = (state = cur_state, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {...state, 'numCakes': state.numCakes - 1}
        default: return state
    }
}

export let creamReducer = (state = cur_state, action) => {
    switch (action.type) {
        case 'BUY_CREAM': return {...state, 'numCreams': state.numCreams - 1}
        default: return state
    }
}