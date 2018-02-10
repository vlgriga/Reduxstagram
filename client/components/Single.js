import React from 'react';

export default class Single extends React.Component {
    render() {
        return (
            <div className="single">
                <p>I'm the Single comp</p>
                <p>ID is {this.props.params.viewID}</p>
            </div>
        )
    }
}