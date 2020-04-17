import React from 'react';

function PostItem(props) {
    const {userId,title, body} = props;
    return (
        <div className="posttext">
            <h2>{ userId }</h2>
            <h3>{ title }</h3>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;