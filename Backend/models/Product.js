const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    img:{
       type:String, 
       required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    realprice:{
        type:number,
    },
    discountedprice:{
        type:number,
        required:true,
    }
})

module.exports=mongoose.model('Product',productSchema);