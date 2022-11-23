import React from "react";
import ReactDOM from "react-dom";
//import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//import AppGoogle from "./Test/Appgoogle";
//import AppLogoutgoogle from "./Test/CloseCount";
import LinkTest from "./components/LinkMenu";
//import { MapasApp } from './mapa/MapasApp';
//import App2 from "./App2";
//import Botongoogle from "./Boton-google";


ReactDOM.render(
<BrowserRouter>
<LinkTest/>
</BrowserRouter>,

document.getElementById("root"));
