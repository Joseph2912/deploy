import React from "react";
import "../styles/Restaurante.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import { Link } from 'react-router-dom'
import AppRestaurante from '../Test/AppRestaurante'


const LoginRestaurante = () =>{

    return(
        <React.Fragment>
            <BotonesSuperior/>
<div className="contenedor1">
<img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg" />
    <AppRestaurante/>
    <br/>
</div>
</React.Fragment>)
}
export default LoginRestaurante