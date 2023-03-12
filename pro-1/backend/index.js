const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

let jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

app.get("/getToken", (req, res) => {
  res.json({
    success: true,
    message: "fetced successfully",
    token: jwtToken,
  });
});

app.listen(4000, () => {
  console.log("connected to port", 4000);
});
