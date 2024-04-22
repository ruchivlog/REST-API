 const express=require("express");
   require("../src/db/conn");
     const MensRanking =require("../src/models/mens");
   const app = express();
     const port =process.env.PORT || 3000;

         app.get("/",async(req,res)=>{
            res.send("hello ruchi");
         })

           app.use(express.json());
        app.post("/mens",async(req,res)=>{
            try{
              const addingMensRecords= new MensRanking(req.body)
                 console.log(req.body);
                const insertMens =await addingMensRecords.save();
                  res.send(insertMens);
            }
             catch(e){
              res.status(400).send(e);
             }

        })
        app.get("/mens",async(req,res)=>{
            try{
              const getMens=await  MensRanking.find({})
                  res.send(getMens);
            }
             catch(e){
              res.status(400).send(e); 
             }

        })
           app.listen(port,()=>{
            console.log(`connection successfull ${port}`);
           })