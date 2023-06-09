import React from 'react';
import './PrimerComponente.css';
import 'bootstrap/dist/css/bootstrap.css';
import monkey3 from '../assets/monkey3.jpg';

class PrimerComponente extends React.Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'queso', 'jamón'],
            calorias: 400
        };
        return (
            <div className='primer-componente'>
                <h1>{this.props.title}</h1>
                <h3 className='titulo'>Soy el Primer Componente</h3>
                <p>{this.props.description}</p>
                <h4 className='bg-info'>{receta.nombre}</h4>
                <p>{'Calorías: ' + receta.calorias}</p>
                <p>Ingredientes:</p>

                <ol
                style={{
                    backgroundImage: `url(${monkey3}), linear-gradient(to right, #a74fff, #617f11)`
                    }}
                >
                {
                    receta.ingredientes.map((ingrediente, i ) => {
                        console.log(ingrediente);
                        return(
                            <li key={i}>
                                {ingrediente}
                            </li>
                        );
                    })
                    }
                </ol>
                <hr/>
            </div>
            
        );
    }
}

export default PrimerComponente;