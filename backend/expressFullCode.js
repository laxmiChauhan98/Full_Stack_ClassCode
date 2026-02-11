const express = require("express");
const app = express();

app.use(express.json()); // middleware to read JSON body

let employees = [
  { id: 1, name: "Amit", role: "Manager" },
  { id: 2, name: "Neha", role: "Developer" }
];


// GET → Read all employees
app.get("/read", (req, res) => {
  res.json(employees);
});


// POST → Add new employee
app.post("/add", (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.json({
    message: "Employee added",
    employees
  });
});


// PUT → Update employee
app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = employees.findIndex(emp => emp.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found" });
  }

  // FULL replacement
  employees[index] = {
    id: id,
    name: req.body.name,
    role: req.body.role
  };

  res.json({
    message: "Employee fully updated (PUT)",
    employees
  });
});


// PATCH → Partial update employee
app.patch("/patch/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  // Only update provided fields
  Object.assign(employee, req.body);

  res.json({
    message: "Employee partially updated (PATCH)",
    employees
  });
});

// DELETE → Remove employee
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  employees = employees.filter(emp => emp.id !== id);

  res.json({
    message: "Employee deleted",
    employees
  });
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});
