import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

    const { state, dispatch } = useContext( UserContext );

    const history = useHistory();
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );

    const loginUser = async ( e ) => {
        e.preventDefault();
        const res = await fetch( '/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                email,
                password
            } )
        } )

        const data = res.json();
        console.log( "data", data );
        if ( res.status === 400 || !data ) {
            alert( "Invalid Credentials" )
        }
        else {
            dispatch( { type: 'USER', payload: true } );
            console.log( "after upate the state", state )
            alert( "Login Successfully" );
            history.push( '/' );
        }
    }
    return (
        <div className="main">
            {/* Sing in  Form */}
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={( e ) => setEmail( e.target.value )}
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="fas fa-key"></i></label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={( e ) => setPassword( e.target.value )}
                                        name="your_pass"
                                        id="your_pass"
                                        placeholder="Password"

                                    />

                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={loginUser} />
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
