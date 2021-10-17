import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    useEffect( () => {
        fetch( '/logout', {
            method: 'GET',
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        } ).then( ( res ) => {
            console.log( "respoonse", res );
            history.push( '/login', { replace: true } );
            if ( res.status != 200 ) {
                const error = new Error( res.error );
                throw new error();
            }
        } ).catch( ( err ) => {
            console.log( "Error", err );
        } )
    } )

    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}

export default Logout
