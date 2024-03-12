const nodemailer=require('nodemailer')
require('dotenv').config();

const mailSender = async(email,title,body)=>{
    try{
        let transporter=nodemailer.createTransport({
            service:process.env.MAIL_SERVICE,
            auth: {
              user: process.env.MAIL_USER,
              pass: 'koba ypil njjk mjjb',
            },
          });

        let info=await transporter.sendMail({
            from:`The Fitness`,
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })

        return info;

    }catch(error)
    {
        console.log('error',error);
        
    }
}

module.exports=mailSender;