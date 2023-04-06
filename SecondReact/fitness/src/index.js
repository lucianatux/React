//const element = document.createElement('h1');
//element.innerText = 'Hello';
//const container = document.getElementById('root');
//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
const container = document.getElementById('root');

//ReactDOM.render(que, donde)
ReactDOM.render(element, container);