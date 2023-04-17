const express =  require('express');
const router = express.Router();

const categoryValidation = require('../validations/categoryValidation');

const Authorization= require('../services/Authorization');
const Category = require('../controllers/Category');

router.post('/create-category', [categoryValidation, Authorization.authorized], Category.create);

module.exports = router;