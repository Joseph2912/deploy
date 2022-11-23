import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Restaurante.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import { AppRegistro2 } from "../Test/AppRestaurante";

const Registro = () =>{

  return(
<React.Fragment>
   <BotonesSuperior/>
    <div className="contenedor2">
    <img src="https://img.europapress.es/fotoweb/fotonoticia_20180117114451_1200.jpg" />
    <AppRegistro2/>
    </div>
    </React.Fragment>
  )
}

export default Registro