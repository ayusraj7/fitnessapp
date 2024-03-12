const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:'true'
    },
    mobileno:{
        type:Number,
        required:'true',
    },
    email:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:['member','trainer'],
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    resetToken:{
        type:String,
    },
    expireToken:{
        type:Date,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AdditionalDetails'
    },
    classes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class'
    }],
    Products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]

},{timestamps:true}
)

module.exports=mongoose.model('User',userSchema);