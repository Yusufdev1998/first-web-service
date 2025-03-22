import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bu mening birinchi serverim");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});

// Tayyor servicelar - kichik project
