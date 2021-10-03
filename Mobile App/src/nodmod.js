const express=require("express");
const multer=require("multer");
const app=express();
var upload=multer({
    dest:'uploada/'
})
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../uploada/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
//   var upload = multer({ storage: storage });
app.post('/upload',upload.array('pic',6),(req,res)=>{
    var upload= multer({ dest: '../uploada/' });
    res.send();

})
app.listen(3000,()=>{
    console.log("Server is up!")
})