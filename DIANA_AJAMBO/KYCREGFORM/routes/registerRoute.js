const express = require('express');
const router = express.Router();
const Register = require('../model/kycformModel')



//post into a database
router.post('/register',async (req, res) => {
    try {
        const register = new Register(req.body);
        await register.save()
        res.redirect('/register')      //we redirect to a path
        console.log(req.body)  
    }
    catch (err) {
        console.log(err)
    }
})

//retrieving from a database
router.get('/register',async(req,res)=>{
    try{
      let items = await Register.find();
      res.render('kycform',{data:items})    //we render a file
    }
    catch(err){
      console.log(err)
    }
  })  

module.exports = router
