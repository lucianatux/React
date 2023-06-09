import React from 'react';
//import penguin from '../images/pinguino.jpg';
import ladrillos from '../images/ladrillos.jpg';
import './styles/Card.css';

class Card extends React.Component {
    //background: url('../../images/ladrillos.jpg') no-repeat, linear-gradient(to right, rgba(174, 86, 232, 0.413), #432ca171);

  /*  constructor(props) {
        super(props);
        this.state = {
            image:'https://live.staticflickr.com/65535/52477063536_e04770fe87_z.jpg'
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image:'https://live.staticflickr.com/65535/52477609923_92cdb7df0e_z.jpg'
            })
        }, 5000)
    }
    y en linea 34  <img src={this.state.image} alt='' className='float-right' id='peng'/>
    */
    render() {
        return (
            <div className='card mx-auto fitness-card'
            style={{
                backgroundImage: `url(${ladrillos}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}
            >
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={this.props.img} alt='' className='float-right' id='peng'/>
                        </div>
                        <div className='col-6 fitness-card-info'>
                            <h1 className='title'>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card;