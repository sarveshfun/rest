const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const { db_opertion } = require("./sql.js");
const {Encryption} = require('./encrytion.js')
const options = { origin: "http://localhost:3000" };
app.use(cors(options));
app.use(express.json());
app.post("/register", async(req, res ,next) => {
  let password
  try{
    password = await Encryption(req.body.password)
    req.customData = password
      

    next()
  }catch(e){
     console.log(e)
     var err = new Error("enccrypt ERROR");
     next(err)
 
  

  }
  
   
  
},async(req,res,next)=>{
    
   const scheam = {
    name: req.body.fullName,
    phonenumber: req.body.phoneNumber,
    subject: req.body.courseType,
    password:req.customData,
    email: req.body.email,
  };

  const data = Object.keys(scheam).map((item) => {
    return scheam[item];
  });
    try{
    const  value =  await db_opertion(data);
  if (value == "success") {
    res.status(200).send({ status: value });
  } }catch(e){
    var err = new Error(e);
    next(err)
   
  }
  

});

app.use(function(err, req, res, next) {
     console.log(err.message)
  res.status(500).send({ status: 'unsuccess' });
  
});

app.listen(PORT, () => {
  console.log(`listening port ${PORT} `);
});
