const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Sistema activo");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT);
