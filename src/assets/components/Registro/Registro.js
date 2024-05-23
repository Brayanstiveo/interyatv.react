// Registro.js
// import { Link } from "react-router-dom";
import React from 'react';
import "./registro.css"

function Registro() {
  return (
    <div className="registro">
      {/* Contenido del formulario de registro */}
      <br></br>
      <br></br>
      <br></br>
      <div className="titulo">
        <h2>Regístrate</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='centrar-div'>
        <form className="formulario">
          {/* Campos del formulario */}

          <label>Nombres:</label>
          <input type="text" placeholder="Nombres" />

          <label>E-mail: </label> 
          <input type="text" placeholder='E-mail' />



          <label>Contraseña:</label>
          <input type="password" placeholder="Contraseña" />


          <label>Edad:</label>
          <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required />
          <label for="pais">País:</label>
          <select id="pais" name="pais">
          <option value="select">Seleccionar...</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="CO">Colombia</option>
            <option value="MX">México</option>
          </select>
          <br></br>
          <br></br>
          <label for="terminos2" class="terminos-label">He leído y acepto los términos y condiciones.</label>
          <input type="checkbox" id="terminos2" name="terminos2" />
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
