import React from "react";
import "../styles/navbar.css";
import { BiBasket } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useAuth } from "../Test/Firebase";



const Navbar = ({ setShow, size }) => {
  const currentUser = useAuth();
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Eatpod
        </span>
        <div> <Link to="/EntrarUsuario"><h4>{ currentUser?.email }</h4></Link></div>     
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i className=""><BiBasket/></i>
          </span>
          <span>{size}</span>        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
