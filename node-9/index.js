require("colors");
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

conn.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Connected");
  }
});

conn.query("select * from users", (err, result) => {
  console.log(result);
});
