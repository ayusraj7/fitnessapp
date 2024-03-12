const OTP=require('../models/OTP');
const mailSender=require('../config/mailSender');
const otpGenerator=require('otp-generator');
const emailTemplate=require('../template/otpTemplate')

exports.sendotp=async(req,res) => {
    try{
        const{email}=req.body;
        console.log('email',email);
        let otp=otpGenerator.generate(6, { digits:true ,lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
        //limit and sort in mongodb
        console.log('hower arey ou')
        const otppresent=await OTP.findOne({otp:otp});
        
        
        while(otppresent)
        {
            otp=otpGenerator.generate(6,{digits:true,lowerCaseAlphabets:false,upperCaseAlphabets:false});
        }

        const data=await OTP.create({
            email:email,
            otp:otp,
        })
        
        
        const response=await mailSender(email,'OTP Registration:The Fitness',emailTemplate(otp))
        console.log('response',response);
        res.status(200).json({
            success:true,
            otp:otp,
            message:'Otp sent Successfully'
        })
    }catch(error)
    {
        res.status(500).json({
            message:'internal sever error',
            error:error
        })
    }
}