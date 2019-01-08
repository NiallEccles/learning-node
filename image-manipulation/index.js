var express = require("express");
var app = express();
var Jimp = require("jimp");

Jimp.read("assets/input.jpg")
  .then(harry => {
    return harry
      .quality(60)
      .invert()
      .write("assets/output.jpg");
  })
  .catch(err => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.sendFile("/assets/output.jpg", { root: __dirname });
});

var server = app.listen(4200, () => {
  console.log(`Server running at http://localhost:${server.address().port}`);
});
