import React , { useState } from 'react'
import './login.css'
import axios from 'axios';

export const Login = () => {

  const [dataUser, setUser] = useState({
    name:"",
    password:"",
})

//const [archivos, setArchivos] = useState();

const handleChange = (e) => {
    const {name, value} = e.target
    setUser({...dataUser,[name]:value})
   
}

const handleSubmit = (e) => {

    e.preventDefault();
    console.log(dataUser)

    axios.post('https://localhost:8080/createUser', { dataUser })
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })
}

  return (
    <div id="contenedor">
      <div id="central">
        <div id="login">
          <div class="titulo">
                   Login
          </div>
          <form id="loginform">
            <input
              placeholder='User Name'
              autoComplete='off'
              name='name'
              value={dataUser.name}
              onChange={handleChange}
              /> 
              <input
              placeholder='password'
              autoComplete='off'
              name='password'
              value={dataUser.password}
              onChange={handleChange}
              />     
              <button type="submit" onClick={handleSubmit}>Login</button>
          </form>
          <div class="pie-form">
            <a href="#">¿Perdiste tu contraseña?</a>
            <a href="#">¿No tienes Cuenta? Registrate</a>
          </div>
          <div class="inferior">
              <a href="#">Volver</a>
          </div>
      </div>
    </div>
    </div>
  );
}
