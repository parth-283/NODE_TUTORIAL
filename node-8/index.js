require("colors");
const express = require("express");
const EventEmitter = require("events");

const app = express();

const event = new EventEmitter();

let count = 0

event.on("countAPI",()=>{
    count++
    console.log("event called".red,count);
})

app.get("/", (req, res) => {
  res.send("api called");
  event.emit("countAPI");
});

app.get("/search", (req, res) => {
  res.send("search api called");
  event.emit("countAPI");
});

app.get("/update", (req, res) => {
  res.send("update api called");
  event.emit("countAPI");
});

app.listen(4000, () => {
  console.log("App Listen On { http://localhost:4000 }".blue);
});
