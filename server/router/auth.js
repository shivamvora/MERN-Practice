const express = require( 'express' );
const router = express.Router();

require( '../db/conn' );
const User = require( '../model/userSchema' );


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

    const { name, email, phone, work, password, cpassword } = req.body;

    if ( !name || !email || !phone || !work || !password || !cpassword ) {
        return res.status( 422 ).json( { error: "please fillled the field properly" } )
    }
    try {
        const userExist = await User.findOne( { email: email } );
        if ( userExist ) {
            return res.status( 422 ).json( { error: "Email already Exist" } )
        } else if ( password != cpassword ) {
            return res.status( 422 ).json( { error: "Password are not matching" } )
        } else {
            const user = new User( { name, email, phone, work, password, cpassword } );
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
        const { email, password } = req.body;
        if ( !email || !password ) {
            return res.status( 400 ).json( { error: "Please filled the data" } )
        }
        const userLogin = await User.findOne( { email: email } );
        if ( !userLogin ) {
            res.status( 400 ).json( { message: "user Error Successfully" } )
        } else {
            res.json( { message: "user Sigin Successfully" } )
        }
    } catch ( err ) {
        console.log( err );
    }
} )


module.exports = router;