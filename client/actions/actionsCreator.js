// increment
export function increment(index) {
    return {
        type :'INCREMENT_LIKES',
        index : index
    }
}
// add comment
export function addComment(postID , author , comment) {
    return {
        type :'ADD_COMMENT',
        postID,
        author,
        comment
    }
}

// remove comment
export function removeComment(postID , key ) {
    return {
        type :'REMOVE_COMMENT',
        postID,
        key
    }
}