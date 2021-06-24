const cur_state = {'numCakes':30};

export let cakeReducer = (state = cur_state, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {...state, 'numCakes': state.numCakes - 1}
        default: return state
    }
}