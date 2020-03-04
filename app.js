const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  //running on root of server each time
  res.send("a string is here");
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
