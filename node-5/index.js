require("./config/config");
require("colors");
const express = require("express");
const product = require("./Model/product");

const app = express();

app.use(express.json());

// Data Insert API
app.post("/create", async (req, res) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(result, "result".underline.green);
  res.send({ result: result });
});

// Data Find API
app.get("/find", async (req, res) => {
  const result = await product.find();
  console.log(result, "result".underline.green);
  res.send({ result: result });
});

// Data Delete API
app.delete("/delete/:_id", async (req, res) => {
  const result = await product.deleteOne(req.params);
  console.log(result, "result".underline.green);
  res.send({ result: result });
});

// Data Update API
app.put("/update/:_id", async (req, res) => {
  const result = await product.updateOne(req.params, { $set: req.body });
  console.log(result, "result".underline.brightCyan);
  res.send({ result: result });
});

// Data Search API
app.get("/search/:key", async (req, res) => {
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  console.log(req.params, "search data".red);
  res.send(data);
});

app.listen(4000, () => {
  console.log("App Listen On { http://localhost:4000 }".blue);
});
