  
const express = require("express");
const router = express.Router();
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(helmet());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.post("/api", (req, res)=> {
  try {
    console.log(req)
  res.json(req)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
  
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});