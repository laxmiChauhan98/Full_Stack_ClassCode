console.log("Our first JS program runs!");


const http = require("http");

const server = http.createServer((req, res) => {
  
  res.end("Hello, World! this is our first server\n");
});

const PORT = 2000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});