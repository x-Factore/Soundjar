const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
  
        mongoose.connect('mongodb://localhost:27017/Auth')
       .then(()=>console.log('connected to database'))
     .catch((error)=>
     console.log(error ))
    
  const connectedDb= mongoose.connection
  
  module.exports = connectedDb;
  
