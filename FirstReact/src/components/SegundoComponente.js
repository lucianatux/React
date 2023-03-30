import React, {Component} from 'react';

class SegundoComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://live.staticflickr.com/65535/52477609893_441ea3a0d5_w.jpg'
        }
    }

        componentDidMount(){
            setTimeout(()=>{
                this.setState({image: 'https://live.staticflickr.com/65535/52477527455_50ecea5949_z.jpg'})
            }, 5000)
        }
    
    render(){
        const {title, description} = this.props;
        return (
            <React.Fragment>
                <h3>Soy el Segundo Componente</h3>
                <h4>Estoy probando</h4>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={this.state.image}/>
                <hr />
            </React.Fragment>
        );
    }
}

export default SegundoComponente;