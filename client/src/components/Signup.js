import React, { useState } from 'react';
// import '../components/style.css'
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const [user, setUser] = useState( {
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: '',
    } )
    let name, value;
    const handleInputs = ( e ) => {
        name = e.target.name;
        value = e.target.value;

        setUser( { ...user, [name]: value } )
    }
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Sign up</h1>
                            <form className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="fas fa-user"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" autoComplete="off" value={user.name} onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" autoComplete="off" value={user.email} onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="fas fa-phone"></i></label>
                                    <input type="number" name="phone" id="phone" placeholder="Your Phone Number" autoComplete="off" value={user.phone} onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i className="fas fa-briefcase"></i></label>
                                    <input type="text" name="work" id="work" placeholder="Your Profession" autoComplete="off" value={user.work} onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i className="fas fa-key"></i></label>
                                    <input type="password" name="password" id="password" placeholder="Your Password" autoComplete="off" value={user.password} onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword"><i className="fas fa-key"></i></label>
                                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Your Password" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                                </div>
                                <div className="form-group form-button buttons">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                    <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;
