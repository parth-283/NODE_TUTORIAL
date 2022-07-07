const dbConnection = require("../Connection/mongodb");

const deleteData = async () => {
  let data = await dbConnection();
  const result = await data.deleteOne({ name: "y14" });
  if (result.acknowledged) {
    console.log(result);
  }
};
deleteData();
