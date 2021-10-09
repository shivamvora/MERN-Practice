import React from 'react';


const Contact = () => {
    return (
        <div class="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Get In Touch</h1>
                            <form className="register-form" id="contact_form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="fas fa-user"></i></label>
                                    <input type="text" name="name" id="contact_form_name" placeholder="Your Name" autoComplete="off" required="true" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                    <input type="email" name="email" id="contact_form_email" placeholder="Your Email" autoComplete="off" required="true" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="fas fa-phone"></i></label>
                                    <input type="number" name="phone" id="contact_form_phone" placeholder="Your Phone Number" autoComplete="off" required="true" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i className="fas fa-briefcase"></i></label>
                                    <div class="form-group green-border-focus">
                                        <textarea class="form-control" id="message" placeholder="Message" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="form-group form-button buttons">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Send Message" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Contact
