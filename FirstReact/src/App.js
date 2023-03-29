//import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = 'Luciana';
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
