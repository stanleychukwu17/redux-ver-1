const cur_state = {'numCakes':30};
const cream_state = {'numCreams':60}

export let cakeReducer = (state = cur_state, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {...state, 'numCakes': state.numCakes - action.payload}
        default: return state
    }
}

export let creamReducer = (state = cream_state, action) => {
    switch (action.type) {
        case 'BUY_CREAM': return {...state, 'numCreams': state.numCreams - action.payload}
        default: return state
    }
}