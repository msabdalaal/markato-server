const express = require("express");
const app = express();
const products = require("./routes/products");
const users = require("./routes/users");
const sales = require("./routes/sales");
const logins = require("./routes/logins");
const connectDB = require("./db/connect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = {
  origin: ["https://markato-task.vercel.app", "http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/sales", sales);
app.use("/api/login", logins);

const port = process.env.PORT || 5000;
const start = async (req, res, next) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on ${port}`);
    });
  } catch (error) {}
};
start();
