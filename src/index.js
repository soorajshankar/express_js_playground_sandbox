const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.post("/validateNewUserData", (req, res) => {
  console.log("INPUT_", req?.body?.data?.input);
  const DOB = req?.body?.data?.input?.[0]?.DOB;
  const age = ~~((new Date() - new Date(DOB)) / 31557600000);

  console.log("Age", age);
  if (age > 10) {
    res.send("SUCCESS");
  } else {
    res.status(400).json({ message: "User should have a minimum age of 10" });
  }
  return;
});
app.post("/test", (req, res) => {
  console.log("INPUT_", req?.body);
    res.send("SUCCESS");
  return;
});
app.listen(8080, function () {
  console.log("Server is running on 8080");
});
