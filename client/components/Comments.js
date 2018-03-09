import React from 'react';

export default class Comments extends React.Component {
    renderComments(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" 
                        onClick={this.props.removeComment.bind(null,this.props.params.viewID,i)}>
                            &times; 
                    </button>
                </p>
            </div>
        );
    }

    handleSubmit(e){
        e.preventDefault();
        const { viewID } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(viewID, author, comment);
        this.refs.commentForm.reset();
    }
    
    render() {    
        return (
            <div className="comments">
               {this.props.postComment.map(this.renderComments.bind(this))}
               <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
               </form>
            </div>
        )
    }
}