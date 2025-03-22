import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first server");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});

// Tayyor servicelar - kichik project
