import React, {Component} from 'react';

class SegundoComponente extends Component {

    render() {
        const {title, description} = this.props;
        return (
            <React.Fragment>
                <h3>Soy el Segundo Componente</h3>
                <h4>Estoy probando</h4>
                <h2>{title}</h2>
                <p>{description}</p>
                <hr />
            </React.Fragment>
        );
    }
}

export default SegundoComponente;