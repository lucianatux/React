import React from 'react';
import penguin from '../images/pinguino.jpg'

class Card extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={penguin} alt=''/>
                </div>
                <div>
                    <h1>Tbb Gkjh</h1>
                    <p>Legjh ggi ghkhk dstr</p>
                </div>
            </div>
        )
    }
}

export default Card;