const express = require('express');
const router = express.Router();

//validation ;;
const {registerValidations} = require("../validations/userValidation")
// controller;;
const {register} = require("../controllers/users/userController");






router.post("/register", registerValidations, register);

  



  module.exports =  router;