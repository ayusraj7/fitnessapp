const mongoose=require('mongoose')

const DetailsSchema = new mongoose.Schema({
    img:{
       type:String, 
    },
    age:{
        type:Number,
    },
    preference:{
        type:Array,
    },
    gender:{
        type:String
    }
})

module.exports=mongoose.model('AdditionalDetails',DetailsSchema);