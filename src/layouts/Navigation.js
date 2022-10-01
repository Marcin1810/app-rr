import React from 'react';
import {NavLink, } from 'react-router-dom';
import  '../styles/Navigation.css';

const list = [
    {name: 'Start', path: '/start'},
    {name: 'Produkty', path: '/products'},
    {name: 'Kontakty', path: '/contacts'},
    {name: 'Panel admina', path: '/admin'},
];

const Navigation = () => {
   const menu =  list.map(element =>
    <li key={element.name}>
      <NavLink  to={element.path} >{element.name} </NavLink> </li>)
    return (   
        <div>
           <nav>
            <ul>
           {menu}   
            </ul>
           </nav>
           
        </div>
     );
}
 
export default Navigation;