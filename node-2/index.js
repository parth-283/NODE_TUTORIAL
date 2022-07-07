const color = require("colors");
const dbConnection = require("./mongodb");


const data = async () => {
    console.log("Main Function Called");
    let data1 = await dbConnection();
    MainData = await data1.find().toArray();
    console.log(MainData);
};
data();
