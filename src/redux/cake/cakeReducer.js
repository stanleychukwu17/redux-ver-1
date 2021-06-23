const initialState = {
    'numCakes':30
}

export function cakeReducer(state = initialState, action) {
    switch (action.type) {
        case 'BUY_CAKE':
            return {...state, 'numCakes':state.numCakes - 1}
        default:
            return state
    }
}