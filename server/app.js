const dotenv = require( 'dotenv' );
const express = require( 'express' );
const cookieParser = require( 'cookie-parser' )
const app = express();
dotenv.config( { path: './config.env' } );
require( './db/conn' );
const mongoose = require( 'mongoose' );
app.use( express.json() );
app.use( cookieParser() );
// const User = require('./model/userSchema');
// link router file
app.use( require( './router/auth' ) );


const PORT = process.env.PORT;

// app.get( '/about', ( req, res ) => {
//     res.send( `Hello Contact from the server` )
// } )

app.listen( PORT, () => { console.log( `server is running at ${PORT}` ) } )