import React from 'react';
import penguin from '../images/pinguino.jpg';
import './styles/Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className='card mx-auto'>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={penguin} alt='' className='float-right'/>
                        </div>
                        <div className='col-6'>
                            <h1 className='title'>Tbb Gkjh</h1>
                            <p>Legjh ggi ghkhk dstr</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card;