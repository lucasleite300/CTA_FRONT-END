import React from "react";
import { Link } from "react-router-dom";
import logo from "../BarraNavegacaoInicial/cta-3.png";

const BarraNavegacaoInicial = (props) => {
  return (
    <header className="container-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div
          className="navbar-brand d-flex col col-sm-9 col-md-9 col-lg-10"
          href="paginaInicial.html"
        >
          <Link to="/">
            <img src={logo}  height="50" width="50" alt="logo-cta"></img>
          </Link>
          
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">

          <Link className="nav-item nav-link text-center" to="/cadastro1">
            <button className="btn btn-primary">CADASTRO</button>
            </Link>
        
            <Link className="nav-item nav-link text-center" to="/login">
              <button className="btn btn-success">LOGIN</button>              
            </Link>

            

            

          </div>
        </div>
      </nav>
    </header>
  );
};
export default BarraNavegacaoInicial;
