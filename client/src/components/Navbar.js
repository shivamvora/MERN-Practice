import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';

const Navbar = () => {
    const { state, dispatch } = useContext( UserContext );
    const RenderMenu = () => {
        if ( state ) {

            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Registration</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        } else {

            return (
                <>
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
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li> */}
                </>
            )
        }
    }
    console.log( "Nvbar states", state );
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md navbar-light bg-light bg-faded justify-content-center">
                <NavLink to="/" className="navbar-brand d-flex w-50 mr-auto some-margin">Shivam</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <RenderMenu />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;