const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:'true'
    },
    mobileno:{
        type:number,
        required:'true',
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true,
    }
},{timestamps:true}
)

module.exports=new mongoose.Model('User',userSchema);