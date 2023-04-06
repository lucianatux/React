import React from 'react';
import penguin from '../images/pinguino.jpg';
import './styles/Card.css';

class Card extends React.Component {
    //background: url('../../images/ladrillos.jpg') no-repeat, linear-gradient(to right, rgba(174, 86, 232, 0.413), #432ca171);

    render() {
        return (
            <div className='card mx-auto fitness-card'>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={penguin} alt='' className='float-right' id='peng'/>
                        </div>
                        <div className='col-6 fitness-card-info'>
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