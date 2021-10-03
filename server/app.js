const dotenv = require('dotenv')
const express = require( 'express' );
const app = express();
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(DB);
mongoose.connection.on('connected',()=>console.log('connected...'))
mongoose.connection.on('error',()=>console.log('connection failed... with -'))


// mongoose.connect(DB,{
//     useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	// useCreateIndex: true,
// 	// useFindAndModify: false
// }).then(()=>{
//     console.log(`connection successfully`);
// }).catch((err)=>console.log(`no connection ${err}`));



// Middlware
// const middleware = (req,res,next) => {
// console.log(`hello my middle ware`);
// next();
// }

// middleware();

app.get( '/', ( req, res ) => {
    res.send( 'Hello world from the server js file first route great cool' )
} );

app.get( '/about', ( req, res ) => {
    console.log("Hello my about");
    res.send( 'Hello world from about' )
} );

app.get( '/contact', ( req, res ) => {
    res.send( 'Hello world from contact' )
} );
app.get( '/signin', ( req, res ) => {
    res.send( 'Hello login' )
} );
app.get( '/signup', ( req, res ) => {
    res.send( 'Hello registration' )
} );


app.listen( PORT, () => { console.log( `server is running at port no ok fine ${PORT}` ) } )