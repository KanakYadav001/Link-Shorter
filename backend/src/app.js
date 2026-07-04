const express = require("express");

const cookieParser = require("cookie-parser");
const UserRouter = require("./routers/user.route");
const LinkRouter = require("./routers/link.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", UserRouter);
app.use("/", LinkRouter);

module.exports = app;
