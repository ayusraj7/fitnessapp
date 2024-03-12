const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    thumbnail:{
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
    userCreated:{
        type:mongoose.Schema.Types.ObjectId,
       ref:'User',
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
},
{timestamps:true})

moduel.exports=mongoose.model('Blog',blogSchema);