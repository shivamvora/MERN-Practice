import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="main">
            {/* Sing in  Form */}
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="fas fa-key"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                    <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
