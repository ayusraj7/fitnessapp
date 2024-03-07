const mongoose=require('mongoose');
require('dotenv').config();
const MONGODB_URL=process.env.MONGODB_URL;

const databaseConnect = ()=>{
    try{
        mongoose.connect(MONGODB_URL,{
            
        }).then(console.log('connection established'))
        .catch((error)=>{console.log('error')});
    }catch(error)
    {
        console.log('error',error);
    }
}

module.exports=databaseConnect;