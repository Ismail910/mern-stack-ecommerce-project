const jwt = require("jsonwebtoken");
 const {JWT_SECRET} = require('../config/envConfig')
class Authorization {

//     authorized(req , res ,next){
        
//         const headerToken = req.headers.authorization;
       
//         if(headerToken){
//          const token = headerToken.split('Bearer ')[1];
//         const verified = jwt.verify(token, JWT_SECRET);
//         if(verified){
//             next();
//         }else{
//             return res.status(401).json({message: [{msg: `please add a valid token`}]})
//         }
           
//         }else{
//             return res.status(401).json({errors: [{msg: `Please add token`}]})
//         }
// }


authorized(req , res ,next){
        
        const headerToken = req.headers.authorization;
       
        if(headerToken){
         const token = headerToken.split('Bearer ')[1];
         console.log(token);
        const verified = jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err){
                console.log(err);
                return res.status(401).json({message: [{msg: `please add a valid token`}]})
            }
            console.log(err);
            next();
        });
        // if(verified){
        //     next();
        // }else{
        //     return res.status(401).json({message: [{msg: `please add a valid token`}]})
        // }
           
        }else{
            return res.status(401).json({errors: [{msg: `Please add token`}]})
        }
    }
    


}
module.exports = new Authorization();


// module.exports = function(req, res, next) {
//     const token = req.body.token || req.query.token || req.headers[ "x-access-token" ];
//     if (token) {
//         return jwt.verify(token, SECRET, function(err, decoded) {
//             if (err) {
//                 return res.json({
//                     success: false,
//                     message: "Failed to authenticate token.",
//                 });
//             }
//             req.user = decoded;
//             return next();
//         });
//     }
//     return res.unauthorized();
// };

