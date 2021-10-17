import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    const { state, dispatch } = useContext( UserContext );

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
            dispatch( { type: 'USER', payload: false } );
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
