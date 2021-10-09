import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md navbar-light bg-light bg-faded justify-content-center">
                <NavLink to="/" className="navbar-brand d-flex w-50 mr-auto">Shivam</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;