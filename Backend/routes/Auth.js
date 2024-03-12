const express=require('express');
const router=express.Router();

const{signup}=require('../controllers/Auth')
const{sendotp}=require('../controllers/otp')

router.post('/signup',signup);
router.post('/send-otp',sendotp);


module.exports=router;