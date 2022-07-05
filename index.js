const data = require('./data')
const http = require("http");
const fs = require('fs')

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

const input = process.argv
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])

}else{
    console.log("invalid output");
}
