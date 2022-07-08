require("colors");
const express = require("express");
const { connect } = require("./config/config");
const con = require("./config/config");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  con.query("Insert Into users SET ? ", data, (err, result, field) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/:id", (req, res) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  con.query(
    "UPDATE users SET name = ?, password = ?, user_type = ? where id = ?",
    data,
    (err, result, field) => {
      if (err) throw err;
      res.send(result);
    }
  );
});
app.delete("/:id", (req, res) => {
  con.query(
    "DELETE FROM users WHERE id =" + req.params.id,
    (err, result, field) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.listen(4000, () => {
  console.log("App Listen On { http://localhost:4000 }".blue);
});
