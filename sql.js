const sqlite3 = require('sqlite3').verbose();
//let db = new sqlite3.Database(':memory:');



exports.db_opertion = (data)=>{
const sql = "INSERT INTO  student (name, phonenumber,subject,password,email) VALUES (?, ?, ?,?,?)";
console.log(data,"from db") 
let db = new sqlite3.Database('./data.db', err => {
    if (err) {
     console.error(err.message);
    }else{
    console.log('Connected to the in-memory SQlite database.');}
  });
  



  db.run(sql,data,err=>{
       if(err){
         console.log(err.message)
       } else{
           return "success"
       }

  })

  return "succes"

 }