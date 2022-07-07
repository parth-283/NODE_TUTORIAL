const express = require("express");
const dbconnection = require("./Connection/mongodb");
const colors = require("colors");
const mongodb = require('mongodb')

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbconnection();
  let result = await data.find().toArray();
  res.send(result);
});

app.post("/", async (req, res) => {
  let data = await dbconnection();
  let result = await data.insertOne(req.body);
  res.send(result);
  if (result.acknowledged) {
    console.log("Data Inserted".green);
  }
});

app.put("/:name", async (req, res) => {
  let data = await dbconnection();
  let result = await data.updateOne({name:req.params.name}, {
    $set:req.body
  });
  res.send({ result: result });
});

app.delete("/:id",async (req,res)=>{
  let data = await dbconnection();
  const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send({result})
})

app.listen(4000, () => {
  console.log("App Listen On {http://localhost:4000}".blue);
});
