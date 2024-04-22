
  const mongoose= require('mongoose');
    mongoose.connect("mongodb://localhost:27017/olymics",{
        
    }).then(()=>{
         console.log("conncetion establish");
    }).catch((e)=>{
        console.log("no conncetion establish");
    })