const dbConnection = require("../Connection/mongodb");

const updateData = async () => {
  let data = await dbConnection();
  let result = await data.update(
    { price:220 },
    {
      $set: { name: 'y14' },
    }
  );
  console.log(result);
};

updateData();
