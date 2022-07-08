require('colors')
const express = require('express')
const multer = require('multer')


const app = express()

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            console.log(file,"file".red);
            cb(null,file.originalname )
        }
    })
}).single("user_file")

app.post("/upload",upload,(req,res)=>{
    res.send("file Upload")
})

app.listen(4000,()=>{
    console.log("App Listen On { http://localhost:4000 }".blue);
})