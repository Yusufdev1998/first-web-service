import express from "express";
const todos = [];
const app = express();
const getNextId = () => {
  return Math.max(...todos, 0) + 1;
};
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Bu mening birinchi serverim!");
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const new_todo = req.body;
  new_todo.id = getNextId();

  todos.push(new_todo);

  res.status(201).send({ msg: "Successfully created" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});

// Tayyor servicelar - kichik project
