const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieparser = require("cookie-parser");

const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");

const app = express();

dotenv.config();
app.use(cors());
app.use(cookieparser());
app.use(morgan("common"));
app.use(express.json());


// Install Server
app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running!");
});


  // CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log("Cannot connect to MongoDB", err);
  process.exit();
});

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);