const dbConnection = require("../Connection/mongodb");

// Without Condition
const find = async () => {
  console.log("Main Function Called");
  let data = await dbConnection();
  result = await data.find().toArray();
  console.log(result);
};

//  With Condition
// const find = async () => {
//     console.log("Main Function Called");
//     let data = await dbConnection();
//     result = await data.find({name:'max'}).toArray();
//     console.log(result);
// };


find();
