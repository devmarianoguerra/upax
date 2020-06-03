import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="#">
        Soluciones Empresariales SA de CV
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" href="#">
              Inicia sesión
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" href="#">
              Regístrate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/delete" className="nav-link" href="#">
              Elimina tu cuenta
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
