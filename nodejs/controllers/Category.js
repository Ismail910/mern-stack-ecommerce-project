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


    async categories(req, res){
      
        const page = req.params.page || 1;
        const perPage = 5;
        const skip = (page - 1) * perPage;
        const endIndex = page * perPage;
        const results = {};
       try {
        
        const count = await CategorieModel.find({}).countDocuments();
        const response = await CategorieModel.find({}).skip(skip).limit(perPage).sort({updatedAt: -1});

        // return res.status(200).json({"categories": {'categories': response, perPage, count}})
        
        if (endIndex < count) {
            results.next = {
                page: +(page) + 1 ,
                limit: perPage
            };
        }
        
        if (skip > 0) {
            results.previous = {
                page: page - 1,
                limit: perPage
            };
        }
        
        results.totalPages = Math.ceil(count / perPage);
        results.totalDocuments = count;
        results.currentPage = page;
        results.documents = response;
        return res.status(200).json(results);

       } catch (error) {
        console.log(error.massage);
        return res.status(500).json();
        
       }


    }
}

module.exports = new Category; 