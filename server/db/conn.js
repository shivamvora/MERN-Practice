const mongoose = require('mongoose');
const DB = process.env.DATABASE;


// mongoose.connect(DB);
// mongoose.connection.on('connected',()=>console.log('connected...'))
// mongoose.connection.on('error',()=>console.log('connection failed... with -'))


mongoose.connect(DB,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
	// useCreateIndex: true,
	// useFindAndModify: false
}).then(()=>{
    console.log(`connection successfully......`);
}).catch((err)=>console.log(`no connection ${err}`));
