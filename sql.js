const sqlite3 = require('sqlite3').verbose();




exports.db_opertion = (data)=>{
const sql = "INSERT INTO  student (name, phonenumber,subject,password,email) VALUES (?, ?, ?,?,?)";
console.log(data,"from db") 
let db = new sqlite3.Database('./data.db', err => {
    if (err) {
     console.error(err.message);
    }else{
    console.log('Connected to the in-memory SQlite database.');}
  });
  

 return  new Promise((reslove,reject)=>{
  db.run(sql,data,err=>{
       if(err){
            reject('unsucess')
         console.log(err.message)
       } else{
        console.log("data is successfully added in database")
             reslove("success")
       }

  })})

 

 }