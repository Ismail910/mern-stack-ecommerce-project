const {validationResult} = require("express-validator")

const CategorieModel = require("../models/Category");
class Category {
    async  create (req ,res) {
        const errors = validationResult(req);
        const {name} = req.body;
        if(errors.isEmpty())
        {
           const exist = await CategorieModel.findOne({name});

           if(!exist)
           {
            await CategorieModel.create({name})
            return res.status(201).json({massage: 'catalogue has created successfully'})

           }else{
            return res.status(401).json({errors: [{msg: `${name} category is already exist!`}]});
           }
          
        } else {
            console.log(errors.array());
            return res.status(401).json({errors: errors.array()});
        }

    }
}

module.exports = new Category; 