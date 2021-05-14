import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav className="navbar  navi navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container">
                <Link className="navbar-brand" to="/">¡Electrodomesticos y más! </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link navbar-brand">Electrodomesticos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link navbar-brand">Agregar Electrodomestico</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria" className="nav-link navbar-brand">Crear Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link navbar">Register-Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link navbar">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default Nav;