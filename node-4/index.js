const mongoose = require("mongoose");
const color = require("colors");
mongoose.connect("mongodb://localhost:27017/e-comm");
const productSch = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDb = async () => {
  const productModel = mongoose.model("products", productSch);
  let data = new productModel({
    name: "m 100",
    price: 1000,
    brand: "xyz",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const productModel = mongoose.model("products", productSch);
  let data = await productModel.updateOne(
    { name: "m 100" },
    {
      $set: { price: 5000 },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const productModel = mongoose.model("products", productSch);
  let data = await productModel.deleteOne({ name: "m 100" });
  console.log(data, "data".blue);
};

const findInDB = async () => {
  const productModel = mongoose.model("products", productSch);
  let data = await productModel.find({ name: "m 10", price: 1000 });
  console.log(data);
};

findInDB();
