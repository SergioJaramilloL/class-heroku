require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const videoRouter = require("./src/routes/video");

const port = process.env.PORT || 8080;
const app = express();
connect();

app.use(express.json());
app.use(cors());

//Rutas - endpoint
app.use("/videos", videoRouter);

app.listen(port, () => {
  console.log("App running OK heroku");
});

//MVC
// Model View Controller
