import express from "express";
import cors from "cors";
import { createTodo, getAllTodos, updateTodo } from "./services/todo";

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/todos", async (req, res) => {
  const result = await getAllTodos();
  res.json(result);
});

app.post("/api/todo/create", async (req, res) => {
  const newTodo = req.body;
  const result = await createTodo(newTodo);
  res.json(result);
});

app.post("/api/todo/update", async (req, res) => {
  const newTodo = req.body;
  const result = await updateTodo(newTodo);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Running the app on port: ${PORT}`);
});
