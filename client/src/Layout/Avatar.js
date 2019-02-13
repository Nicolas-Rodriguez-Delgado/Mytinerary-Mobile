import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component {
    render(){
        return(
            <div className="avatar">
                <img src='/images/whiskers-sam.jpg' alt="Avatar" className="avatarPic" />
            </div>
        )
    }
}

export default Avatar