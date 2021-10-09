import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="main">
            {/* Sing in  Form */}
            <section class="sign-in">
                <div class="container">
                    <div class="signin-content">
                        <div class="signin-form">
                            <h2 class="form-title">Sign in</h2>
                            <form class="register-form" id="login-form">
                                <div class="form-group">
                                    <label for="email"><i class="fas fa-envelope"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <label for="your_pass"><i class="fas fa-key"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
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
