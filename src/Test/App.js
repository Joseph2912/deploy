import { useRef, useState } from "react";
import "../styles/Usuario.css";
import { signup, login, logout, useAuth } from "./Firebase";
import Appgoogle from '../Test/Appgoogle'
import { Link } from 'react-router-dom'
import AppLogoutgoogle from '../Test/CloseCount'

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
      await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div className="contenedor2">
      <div className="Registro2">
      <h1>Iniciar sesión</h1>

     
        <input ref={emailRef} type="email" placeholder="Ejemplo@gmail.com" required id="nombre" maxlength="20" />
        <input ref={passwordRef} type="password" placeholder="123456789" required id="nombre" maxlength="10" />
    
      <Link to="/" className="button1" disabled={ loading || currentUser } onClick={handleLogin}>Continuar</Link>
      <br/>
      <Appgoogle/>
     
      <br/>
                <p>¿No tienes una cuenta? <Link className="buttonEntrar" to="/RegistroUsuario">Registrate aqui</Link></p>
      </div>
      </div>
    </div>
  );
}

export function AppRegistro() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div className="contenedor2">
      <div className="Registro2">
      <h1>Regístrate</h1>

        <input ref={nameRef} type="text" placeholder="Pedro Picapiedra" required id="nombre" maxlength="10" />
        <input ref={emailRef} type="email" placeholder="Ejemplo@gmail.com" required id="nombre" maxlength="20" />
        <input ref={passwordRef} type="password" placeholder="123456789" required id="nombre" maxlength="10" />
       
    
      <button className="button1" disabled={ loading || currentUser } onClick={handleSignup}>Crear cuenta</button>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
      <br/>
      <br/>
      <p>¿Ya tienes una cuenta? <Link className="buttonEntrar" to="/EntrarUsuario">Incia sesion aqui</Link></p>
      </div>
      </div>
    </div>
  );


}