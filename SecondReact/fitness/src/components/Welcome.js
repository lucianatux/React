import React from 'react';
import './styles/Welcome.css';

function Welcome(props) {
    return(
        <div className="container">
            <h1>Welcome {props.username}</h1>
        </div>
    )
}

export default Welcome
