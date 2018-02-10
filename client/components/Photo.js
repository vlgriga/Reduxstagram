import React,{Component} from 'react';
import { Link } from 'react-router';

export default class Photo extends Component {
    render() {
        const { post, i ,comment } = this.props;
        const code = post.code;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={'/view/'+ code}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>    
                </div>  
            </figure>
        )
    }
} 