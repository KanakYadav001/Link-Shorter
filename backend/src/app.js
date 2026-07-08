import express from "express";
import userRouter from "./routes/User.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.send({
    message: "Welcome to the API",
  });
});

app.use("/api/users", userRouter);

export default app;
