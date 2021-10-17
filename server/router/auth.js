const jwt = require( 'jsonwebtoken' )
const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' )
require( '../db/conn' );
const mongoose = require( 'mongoose' );
const User = require( '../model/userSchema' );
const cookieParser = require( 'cookie-parser' )
const Authenticate = require( '../middleware/authenticate' )
const app = express();
app.use( cookieParser() );
router.get( '/', ( req, res ) => {
    res.send( 'Hello world from the auth' )
} );


/**
 * using promises
 */
// router.post('/register', (req,res)=>{

//     const {name,email,phone,work,password,cpassword}=req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"please fillled the field properly"})
//     }    

// User.findOne({email:email})
// .then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"Email already Exist"})
//     }
//     const user = new User({name,email,phone,work,password,cpassword});

//     user.save().then(()=>{
//         res.status(201).json({message:"user registered successfully"})
//     }).catch((err)=>res.status(500).json({error:"failed to registered"}))
// }).catch(err=>{console.log(err)})
// });

/**
 * using async-await
 */
router.post( '/register', async ( req, res ) => {

    const { name, email, phone, work, password, cpassword, location } = req.body;

    if ( !name || !email || !phone || !work || !password || !cpassword || !location ) {
        return res.status( 422 ).json( { error: "please fillled the field properly" } )
    }
    try {
        const userExist = await User.findOne( { email: email } );
        if ( userExist ) {
            return res.status( 422 ).json( { error: "Email already Exist" } )
        } else if ( password != cpassword ) {
            return res.status( 422 ).json( { error: "Password are not matching" } )
        } else {
            const user = new User( { name, email, phone, work, password, cpassword, location } );
            const userRegister = await user.save();
            if ( userRegister ) {
                res.status( 201 ).json( { message: "user registered successfully" } )
            }
        }
    } catch ( err ) {
        console.log( err )
    }

} );

/**
 * Login Route
 */

router.post( '/signin', async ( req, res ) => {
    try {
        let token;
        const { email, password } = req.body;
        if ( !email || !password ) {
            return res.status( 400 ).json( { error: "Please filled the data" } )
        }
        const userLogin = await User.findOne( { email: email } );
        if ( userLogin ) {
            const isMatch = await bcrypt.compare( password, userLogin.password )
            token = await userLogin.generateAuthToken();
            console.log( "generated token", token )
            res.cookie( 'test', token, {
                expires: new Date( Date.now() + 2589200000 ),
                httpOnly: true
            } );

            if ( !isMatch ) {
                res.status( 400 ).json( { message: "Invalid Credentials" } )
            } else {
                res.json( { message: "user Sigin Successfully" } )
            }
        } else {
            res.status( 400 ).json( { message: "Invalid Credentials" } )

        }


    } catch ( err ) {
        console.log( err );
    }
} )


router.get( '/about', Authenticate, ( req, res ) => {
    // res.send( `Hello About from the server` )
    res.send( req.rootUser );
} )

// get user data for contact us and home page
router.get( '/getdata', Authenticate, ( req, res ) => {
    res.send( req.rootUser );
} )

router.post( '/get_contact', Authenticate, async ( req, res ) => {
    try {
        const { name, email, phone, message } = req.body;
        if ( !name || !email || !phone || !message ) {
            console.log( "Error in Contact Form" );
            return res.json( { error: "Please fill the contact form" } )
        }

        const userContact = await User.findOne( { _id: req.userID } );
        if ( userContact ) {
            const userMessage = await userContact.addMessage( name, email, phone, message );
            console.log( "user Message", userMessage );
            await userContact.save();
            res.status( 201 ).json( { message: "user contact successfully..." } )
        }

        console.log( "CONTATCT US DATA", data )
    } catch ( error ) {
        console.log( "Error meanwhile contact send", error );
    }
} )

router.get( '/logout', ( req, res ) => {
    console.log( "log out" );
    res.clearCookie( 'test', { path: '/' } )
    res.status( 200 ).send( 'User Logout' );
} )


module.exports = router;