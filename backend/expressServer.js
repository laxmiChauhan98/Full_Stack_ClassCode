const express = require("express");

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Hello from Express Server and this is the home page");
});
app.get("/about", (req, res) => {
  res.send("This is the about page");
});

// app.get("/login", (req, res) => {
//   res.send("Login Page");
// });

// app.post("/login", (req, res) => {
//   res.send("Login Form Submitted");
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
