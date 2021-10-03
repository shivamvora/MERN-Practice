const express = require('express');
const router = express.Router();

router.get( '/', ( req, res ) => {
    res.send( 'Hello world from the auth' )
} );

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({message:req.body});
    res.send("my register page");
})

module.exports = router;

