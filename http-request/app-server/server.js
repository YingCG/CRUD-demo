import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js";
import postRouter from "./routes/articles.js";

const app = express();

const port = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Yo! Server is running");
});

app.get("/testusers", (req, res) => {
  res.json({ name: "developer", description: "Yo! Server is running" });
});

app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(5000, () => {
  console.log(`Server started on port ${port}`);
});
