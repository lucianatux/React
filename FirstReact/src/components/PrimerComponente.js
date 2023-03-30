import React from 'react';
import './PrimerComponente.css';
import 'bootstrap/dist/css/bootstrap.css';

class PrimerComponente extends React.Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'queso', 'jamón'],
            calorias: 400
        };
        return (
            <div className='primer-componente'>
                <h1 className='titulo'>Soy el Primer Componente</h1>
                <h4 className='bg-info'>{receta.nombre}</h4>
                <p>{'Calorías: ' + receta.calorias}</p>
                <p>Ingredientes:</p>
                <ol>
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