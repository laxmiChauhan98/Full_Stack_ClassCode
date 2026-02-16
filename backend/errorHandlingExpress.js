// const express = require("express");
// const app = express();


// app.get("/home", (req, res) => {
//   res.send("Welcome to the homepage!");
// });
// app.use((req, res) => {
//   res.status(404).send("Some issue with the URL. Please check.");
 
// });


// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// }   );


const express = require("express");
const app = express();

app.use(express.json());

// app.get("/database", (req, res) => {
//   throw new Error("Student not found"); // error generated
// });
// app.get("/", (req, res) => {
//     res.send("Welcome to the homepage!");
//     });

// // Error-handling middleware (must be at the END)
// app.use((err, req, res, next) => {
//   console.log("Error:", err.message);
//   res.status(500).send("Something went wrong!");
// });

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


//recommended way
app.get("/student/:id", (req, res, next) => {
  const id = req.params.id;

  if (id < 1) {
    return next(new Error("Invalid student ID"));
  }

  res.send("Student found");
});
