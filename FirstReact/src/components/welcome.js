import React from 'react';
import './Welcome.css';

function Welcome(props) {
    return(
        <div className="container">
            <div className='fitness-user-info'>
                <h1>"Hola {props.username}"</h1>
                <p>"Vamos a trabajar!"</p>
                <hr></hr>
            </div>
        </div>
    )
}

export default Welcome;