import React from "react";
import "../styles/Usuario.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import App from '../Test/App'


const RegistroUsuario = () =>{

    return(
        <React.Fragment>
               <BotonesSuperior/>
            <div className="contenedor2">
            <img src="https://cdn.pixabay.com/photo/2016/11/08/05/25/steak-1807532_960_720.jpg"/>
            <App/>
            <br/>
        </div>
      
</React.Fragment>)
}
export default RegistroUsuario
