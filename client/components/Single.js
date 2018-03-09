import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
    render() {
        // get index
        const { viewID } = this.props.params;
        const i = this.props.posts.findIndex( (post) => post.code === viewID);
        const post = this.props.posts[i];
        const postComment = this.props.comments[viewID] || [];

        return (
            <div className="single-photo">
               <Photo i={i} post={post}  {...this.props}/>
               <Comments postComment={postComment} {...this.props} />
            </div>
        )
    }
}