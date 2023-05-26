const bcrypt = require('bcrypt');
 
exports.Encryption =(plaintextPassword)=>{
 console.log(plaintextPassword + "this password")
 return  new Promise((reslove,reject)=>{
 bcrypt.hash(plaintextPassword, 10, (err, hash) => {

  if (err) {
   reject(err)   
  }
   reslove(hash)
  // Store the hashed password in the database or any other storage
  console.log('Hashed password:', hash);
});})
}

