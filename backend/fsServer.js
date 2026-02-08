// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/read-employee") {
//     fs.readFile("employeeData.txt", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("File not found");
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(data);
//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
// });




//write data to empData.json file in JSON format
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/write-employee") {
//     // JSON data (JavaScript object)
//     const empData = {
//       id: 101,
//       name: "Shikha",
//       department: "AI"
//     };
//     fs.writeFile(
//       "empData.json",
//       JSON.stringify(empData, null, 2),(err) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end("Error writing JSON file");
//           return;
//         }
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Employee JSON written successfully"}));
    
//       }
//     );
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });
// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000/write-employee");
// });



//to run it(write in browser) : 10.21.130.63:3000/read-employee


//Reading Json file
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/read") {
    fs.readFile("empData.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File not found");
        return;
      }
      // Convert JSON string to JS object
      const employee = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employee));    
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});







// //to append data to empData.json file in JSON format

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//   if (req.url === "/append") {

//     const newEmployee = {
//       id: 102,
//       name: "Neha",
//       department: "HR"
//     };

//     // Read existing JSON file
//     fs.readFile("empData.json", "utf-8", (err, data) => {
//       let employees = [];

//       if (!err && data) {
//         employees = JSON.parse(data); // convert JSON → JS array
//       }

//       // Append new employee
//       employees.push(newEmployee);

//       // Write back updated JSON
//       fs.writeFile(
//         "empData.json",
//         JSON.stringify(employees, null, 2),
//         (err) => {
//           if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Error appending JSON");
//             return;
//           }

//           res.writeHead(200, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "Employee appended successfully" ,updatedData: employees}));
//         }
//       );
//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });


//curl -i http://localhost:3000/append  to see status code on cmd