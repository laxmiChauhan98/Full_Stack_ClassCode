// const express = require("express");
// const app = express();

// // Built-in middleware to read JSON body
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log("2nd Middleware running...");
//  console.log("Student Role:", req.body.role);
//   next();
// });
// // Custom middleware (READ request)
// app.use((req, res, next) => {
//   console.log("Middleware running...");
//  console.log("Student Name:", req.body.name);
//   next();
// });

// // Route
// app.post("/student", (req, res) => {
//   res.send("Student added successfully");
// });

// // Start server
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });




//urlencoded middleware

// const express = require("express");
// const app = express();      

// // Built-in middleware to read URL-encoded body
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   // HTML form
//   res.send(`
//     <h2>Student Form</h2>
//     <form action="/student" method="POST">
//       <input name="name" placeholder="Enter name" />
//       <br/><br/>
//       <input name="rollNo" placeholder="Enter roll number" />
//       <br/><br/>
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// app.post("/student", (req, res) => {
//   console.log(req.body); // FORM data
//   res.send(`Student added successfully`);
// });

// // Start server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

//express.static middleware
const express = require("express");
const app = express();

// Static middleware
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
