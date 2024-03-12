const bcrypt=require('bcrypt');
const User=require('../models/User')
const OTP=require('../models/OTP')
const AdditionalDetails=require('../models/AdditionalDetails')


exports.signup=async(req,res)=>{
    try{
        const{name,mobileno,accountType,email,password,otp}=req.body;
        

        if(!name || !mobileno || !email || !password || !accountType)
        {
            res.status(400).json({
                success:false,
                message:'Fill all the Details properly'
            })
        }

        

        const userPresent=await User.findOne({email:email});
        if(userPresent)
        {
            res.status(400).json({
                success:false,
                message:'User already exits.Please Sign in'
            })
        }

        // const response=await OTP.find({email})[-1];
        // console.log('response',response);

        const hashPassword=await bcrypt.hash(password,10);

        const profileDetails= await AdditionalDetails.create({
            img:`https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
            age:null,
            preference:null,
            gender:null
        })


        const user=await User.create({
            name,
            mobileno,
            email,
            password:hashPassword,
            accountType,
            additionalDetails:profileDetails._id,
        })

        return res.status(200).json({
            success:true,
            user,
            message:'user registered successfully'
        })
    }catch(error)
    {
        console.log('error',error);
        res.status(500).json({message:'internal server error',error:error})

    }
}