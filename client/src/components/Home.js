import React, { useEffect, useState } from 'react'

const Home = () => {
    const [userName, setUserName] = useState( '' );
    const [show, setShow] = useState( false );



    const userHomePage = async () => {
        try {
            const res = await fetch( '/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            } );
            const data = await res.json();
            // console.log( "data of user in contact page", userName );
            setUserName( data.name );
            setShow( true );
            console.log( "Username for home page", userName );

        } catch ( err ) {
            console.log( err );
        }
    }

    useEffect( () => {
        userHomePage();
    }, [] )
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="homepage">
                            <h1>{show ? `Welcome to Dashboard , ${userName}` : `Welcome to Homepage`}</h1>
                            <h3>{show ? 'You Loggedin, Now You can access all the routes' : 'You are not Loggedin'}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
