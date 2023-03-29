//import React from 'react';
import logo from './logo.svg';
import './App.css';

//importar componentes
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';

function Saludo(moment, name){
  let saludo = <h3>"Good {moment}, {name}"</h3>
  return saludo;
}

function Cumple(day, month){
  let cumple = (
  <div>
    <h4>"Quiero un regalo,</h4>
    <p>mi cumple es el {day} de {month}"</p>
  </div>
  );

  return cumple;
}


function App() {
  let nombre = 'Luciana';
  let dia = 21;
  let mes = 'Noviembre';
  let momento = 'morning';
  let presentacion = <h2>"Hola, soy {nombre}"</h2>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Bienvenid@!</p>
        {alert('Hola Mundo')}
        {presentacion}
        {Saludo(momento, nombre)}
        {Cumple(dia, mes)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className='Componentes'>
          <PrimerComponente/>
          <SegundoComponente/>
        </section>
      </header>
    </div>
  );
}

export default App;
