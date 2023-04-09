const express = require("express");
const env = require("./config/envConfig")
const app = express();
const port = env.PORT || 3000 ;
const connect = require('./config/db');  

// add middleware 
app.use(express.json());

// start routes
const userRoutes = require('./routes/userRoutes');

 

app.use(userRoutes );


// app.get("/", (req , res)=>{

//     res.json({msg: `welcome to my project`});
// });




// database connection
connect();

 app.listen(port , ()=>{
    console.log(`Your serverw is runing at port number : ${port}`);
 });