import React, { useEffect, useState } from 'react';


const Contact = () => {

    const [userData, setUserData] = useState( {} );

    const userContact = async () => {
        try {
            const res = await fetch( '/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            } );
            const data = await res.json();
            console.log( "data of user in contact page", userData );
            setUserData( data );
            console.log( "data of user in contact page", userData );

            // setuserData( data );

            if ( !res.status === 200 ) {
                const error = new Error( res.error );
                throw new error();
            }


        } catch ( err ) {
            console.log( err );
        }
    }

    useEffect( () => {
        userContact();
    }, [] )


    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Get In Touch</h1>
                            <form className="register-form" id="contact_form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="fas fa-user"></i></label>
                                    <input type="text" name="name" id="contact_form_name" placeholder="Your Name" value={userData.name} autoComplete="off" required={true} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                    <input type="email" name="email" id="contact_form_email" placeholder="Your Email" value={userData.email} autoComplete="off" required={true} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="fas fa-phone"></i></label>
                                    <input type="number" value={userData.phone} name="phone" id="contact_form_phone" placeholder="Your Phone Number" autoComplete="off" required={true} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i className="fas fa-briefcase"></i></label>
                                    <div className="form-group green-border-focus">
                                        <textarea className="form-control" id="message" placeholder="Message" rows="3"></textarea>
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
