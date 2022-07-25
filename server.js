const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const user = require("./controllers/userController");
//const userRouter = require("./routes/routes");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect("mongodb://127.0.0.0:27017/test3");

mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("connected with mongodb");
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

//app.use("/user", userRouter);

require("./routes/routesUser")(app);
require("./routes/routesTeam")(app);
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});