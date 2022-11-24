import React from "react";
import {  Routes, Route} from "react-router-dom";
import { BotonesSuperior, Contenedor, Unete} from "./Componentes_pag_Principal";
import App from "../App";
import Restaurante from "./ResgistroRestaurante"
import LoginRestaurante from "./LoginRestaurante"
import Registro from "./ResgistroRestaurante"
import RegistroUsuario from "./RegistroUsuario";
import LoginUsuario from "./LoginUsuario";
//import App2 from "../App2";
//import {MapsApp} from "../MapsApp";

const LinkTest = () =>{

  return(
<div>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="Restaurante" element={<Restaurante /> } />
    <Route path="Iniciar" element={<LoginRestaurante /> } />
    <Route path="Registro" element={<Registro /> } />
    <Route path="Entrar" element={<LoginUsuario /> } />
    <Route path="EntrarUsuario" element={<LoginUsuario /> } />
    <Route path="RegistroUsuario" element={<RegistroUsuario /> } />
    <Route path="Soporte" element={<App /> } />
  </Routes>
  </div>
  )
}

export default LinkTest