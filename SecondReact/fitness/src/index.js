//const element = document.createElement('h1');
//element.innerText = 'Hello';
//const container = document.getElementById('root');
//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'

/*function getName(user){
  return `${user.firstname} ${user.lastname}`;
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const user = {
  firstname: 'Joan',
  lastname: 'Doe',
  avatar: 'https://live.staticflickr.com/65535/52477609893_441ea3a0d5_w.jpg'
}
//const name = 'Lu';
//const element = <h1>Hello {name}</h1>;
//const element = <h1>Hello {getName(user)}</h1>;
const element = (<div>
                  {getGreeting(user)} 
                  <img src={user.avatar} alt='avatar'/>
                </div>)
                */
const container = document.getElementById('root');

//ReactDOM.render(que, donde)
ReactDOM.render(<Card/>, container);