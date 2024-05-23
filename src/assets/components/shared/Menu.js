// Menu.js

import React from 'react';

import "./menu.css"
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">

      {/* Aquí va el contenido del menú */}
      
      <div className='botones-menu'>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Iniciar Sesion</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          {/* Otros elementos del menú */}
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Menu;
