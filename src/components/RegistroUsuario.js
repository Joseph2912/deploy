import React from "react";
import "../styles/Usuario.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import { Link } from 'react-router-dom'
import { AppRegistro } from "../Test/App";


const RegistroUsuario = () =>{

    return(
        <React.Fragment>
            <BotonesSuperior/>
            <div className="contenedor2">
            <img src="https://cdn.pixabay.com/photo/2020/01/08/03/54/market-4749215_960_720.jpg"/>
            
             <AppRegistro/>
            
            </div>
</React.Fragment>)
}
export default RegistroUsuario

