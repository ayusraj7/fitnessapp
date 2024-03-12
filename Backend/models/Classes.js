const mongoose=require('mongoose')

const classSchema = new mongoose.Schema({
    img:{
       type:String,
       required:true,
    },
    heading:{
        type:String,
        required:true,
    },
    CreatedFor:{
        type:String,
        required:true,
    },
    timing:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
    },
    price:{
        type:number
    }
},
{timestamps:true})

module.exports=mongoose.model('Class',classSchema);