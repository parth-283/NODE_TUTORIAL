const data = require('./data')
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(
      JSON.stringify(data)
    );
    res.end();
  })
  .listen(4000);
