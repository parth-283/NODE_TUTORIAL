const data = require("./data");
const http = require("http");
const fs = require("fs");
const path = require("path");
const color = require("colors");
const express = require("express");

const app = express();
// EJS Template Engine
app.set("view engine", "ejs");

// Make Simple API
/* http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(4000); */

// Command-Line Input and Create File
// For Run {node index.js add/remove FILENAME FILECONTENT}
/* const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid output");
} */

// File Listing Show by using NodeJs
/* const dirpath = path.join(__dirname,'files')
for(let i=0;i<5;i++){
    fs.writeFileSync(`${dirpath}/Apple${i}.txt`,`This is a ${i} Apple File`)
}

fs.readdir(dirpath,(err,files)=>{
  files.forEach((item)=>{
    console.log(item.green,"files$$".blue);
  })
}) */

// CRUD with file system
/* const dirpath = path.join(__dirname, "CRUD");
const filepath = `${dirpath}/crud.txt`; */

// **{CREATE}**
// fs.writeFileSync(filepath,`This is a CRUD File`)

// **{READ}**
/* fs.readFile(filepath,'utf8',(err,files)=>{
    console.log(files);
}) */

// **{UPDATE}**
/* fs.appendFile(filepath,' And File Name is CRUD.txt',(err)=>{
    if(!err){
        console.log("File Is Updated");
    }
}) */

// **{RENAME}**
/* fs.rename(filepath, `${dirpath}/Fruit.txt`, (err) => {
  if (!err) {
    console.log("File Is RENAME");
  }
}); */

// **{DELETE}**
/* fs.unlinkSync(`${dirpath}/Fruit.txt`) */

// Express Js
// **HTML**
/* app.get("", (req, res) => {
  res.send(
    `<h1>Hello, This is Home Page</h1><a href="/about">Go To About Page</a>`
  );
});

app.get("/about", (req, res) => {
  res.send(
    `<input type="text" placeholder="User Name"/><button>Click Me</button><br/><a href="/">Go To Home Page</a>`
  );
}); */

// **JSON**
/* app.get("/help", (req, res) => {
  res.send([
    {
      name: "Parth",
      email: "Parth@123.com",
    },
    {
      name: "Ravi",
      email: "Ravi@123.com",
    },
  ]);
}); */

// Make Html Page
/* const publicpath = path.join(__dirname,'public')
app.use(express.static(publicpath)) */

// Remove Extension and Make 404 Page
/* const publicpath = path.join(__dirname, "public");
app.get("", (req, res) => {
  res.sendFile(`${publicpath}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicpath}/about.html`);
});
app.get("/help", (req, res) => {
  res.sendFile(`${publicpath}/help.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicpath}/404.html`);
}); */

// EJS Template Engine
/* app.get("/profile", (req, res) => {
  const User = {
    name: "Parth Kathiriya",
    email: "parth@123.com",
    city: "Surat",
    skils: ['php','js','react','node'],
  };

  res.render("profile", { User });
});
app.get('/login',(req,res)=>{
    res.render("Login")
}) */


// Middleware

const reqfilter=(req,res,next)=>{
  if(!req.query.age){
    res.send("Please Provide age")
  }else if(req.query.age <18){
    res.send("You Can't Access This Page")
  }
  else{
    console.log('Middleware is Running');
    next()
  }
}

app.use(reqfilter)

app.get('/',(req,res)=>{
  res.send('Welcome to Home Page')
})
app.get('/users',(req,res)=>{
  res.send('Welcome to Users Page')
})


app.listen(4000);
