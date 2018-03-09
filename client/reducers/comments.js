function postComments( state = [] , action) {
    switch(action.type){
        case 'ADD_COMMENT':
            //return new state with new comment
            console.log("Adding comment ... ");
            return [...state, {
                user: action.author,
                text: action.comment
            }];

        case 'REMOVE_COMMENT':
            console.log("Removing comment ... ");
            return [
                //fromt the start to return the new state without the deleted
                ...state.slice(0,action.key),
                //after the deleted one
                ...state.slice(action.key + 1)
            ];
        default:
            return state;
    }
    return state;
}

function comments( state = [] , action) {
    if(action.type !== 'undefined') {
        return{
            //take the current state
            ...state,
            // overwrite this post with new one
            [action.postID] : postComments(state[action.postID], action)
        }
    }
    return state;
}


export default comments;