// const jwt = require( 'jsonwebtoken' );
// const User = require( '../model/userSchema' );

// const Authenticate = async ( req, res, next ) => {
//     try {
//         console.log( "what is token before" );
//         console.log( "what is cookies 111", req );
//         console.log( "Should I will get cookies ?", req.cookies );
//         const token = req.cookies.test;
//         console.log( "what is token after", token );
//         const verifyToken = jwt.verify( token, process.env.SECRET_KEY );
//         const rootUser = await User.findOne( { _id: verifyToken._id, "tokens.token": token } );

//         if ( !rootUser ) { throw new Error( "User nout found" ) }

//         req.token = token;
//         req.rootUser = rootUser;
//         req.userID = rootUser._id;

//         next();

//     } catch ( err ) {
//         res.status( 401 ).send( 'Unauthorized:No token provided' );
//         console.log( err );
//     }
// }

// module.exports = Authenticate;



const jwt = require( "jsonwebtoken" );
const User = require( "../model/userSchema" );
const Authenticate = async ( req, res, next ) => {
    try {

        const token = req.cookies.test;
        const verifyToken = jwt.verify( token, process.env.SECRET_KEY );
        const rootUser = await User.findOne( { _id: verifyToken._id, 'tokens.token': token } );
        console.log( "what is root user", rootUser );
        if ( !rootUser ) { throw new Error( 'User Not Found' ); }
        else {
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;

            next();
        }
    } catch ( err ) {
        res.status( 401 ).send( 'Unauthorized: token not provided' )
        console.log( err );
    }
}

module.exports = Authenticate;