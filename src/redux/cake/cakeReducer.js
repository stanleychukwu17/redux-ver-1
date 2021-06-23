const initialState = {
    'numCakes':30
}

export function cakeReducer(state = initialState, action) {
    switch (action.type) {
        case 'BUY_CAKE':
            return {...state, 'loading':true}
        default:
            return state
    }
}