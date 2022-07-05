const data = require('./data')
const http = require("http");
const fs = require('fs')
const path= require('path');
const color = require('colors')

// Make Simple API
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(
      JSON.stringify(data)
    );
    res.end();
  })
  .listen(4000);
 

// Command-Line Input and Create File
// For Run {node index.js add/remove FILENAME FILECONTENT}
const input = process.argv
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("invalid output");
}

// File Listing Show by using NodeJs
const dirpath = path.join(__dirname,'files')
// for(let i=0;i<5;i++){
//     fs.writeFileSync(`${dirpath}/Apple${i}.txt`,`This is a ${i} Apple File`)
// }

fs.readdir(dirpath,(err,files)=>{
  files.forEach((item)=>{
    console.log(item.green,"files$$".blue);
  })
})