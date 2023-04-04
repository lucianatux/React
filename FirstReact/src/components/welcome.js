import React from 'react';

function Welcome(props) {
    return(
        <div className="container">
            <div className="fitness-user-info">
                <h1>"Hola {props.username}"</h1>
                <p>"Vamos a trabajar!"</p>
            </div>
        </div>
    )
}

export default Welcome;