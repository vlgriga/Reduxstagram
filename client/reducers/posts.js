function posts( state = [] , action) {
    switch(action.type) {
        case 'INCREMENT_LIKES': 
            // return updated states
            console.log("Incrementing likes");
            
            const i = action.index;
            return [ 
                ...state.slice(0,i), // before the one we're updating
                {...state[i], likes : state[i].likes + 1},
                ...state.slice(i+1) // after the one we're updating

            ]
        default:
            return state;    

    }
}

export default posts;