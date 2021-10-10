const dotenv = require( 'dotenv' );
const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
dotenv.config( { path: './config.env' } );
require( './db/conn' );
// const User = require('./model/userSchema');
app.use( express.json() );
// link router file
app.use( require( './router/auth' ) );


const PORT = process.env.PORT;

// Middlware
// const middleware = (req,res,next) => {
// console.log(`hello my middle ware`);
// next();
// }
// middleware();

app.get( '/', ( req, res ) => {
    res.send( 'Hello world from the server js' )
} );


app.listen( PORT, () => { console.log( `server is running at ${PORT}` ) } )