
import React from 'react';
import "./login.css"

function Login() {
  return (
    <div className="registro">
      {/* Contenido del formulario de registro */}
      <br></br>
      <br></br>
      <br></br>
      <div className="titulo">
        <h2>Iniciar Sesion</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='centrar-div'>
        <form className="formulario">
          {/* Campos del formulario */}

          

          <label>E-mail: </label> 
          <input type="text" placeholder='E-mail' />



          <label>Contraseña:</label>
          <input type="password" placeholder="Contraseña" />


          
          
          <br></br>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
