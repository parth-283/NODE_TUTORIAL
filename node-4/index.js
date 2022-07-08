const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const productSch = new mongoose.Schema({
    name: String,
    price: Number,
  });
  const productModel = mongoose.model("products", productSch);
  let data = new productModel({ name: "m 10", price: 1000 });
  let result = await data.save();
  console.log(result);
};

main();
