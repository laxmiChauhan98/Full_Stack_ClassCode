const express = require('express');
const path =require('path');

const app= express();

app.get("/", (req, res) => {
    res.send("Hello World! This is our first express server."); 
});

app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

app.get("/file", (req, res) => {
    res.sendFile(path.join(__dirname, 'first.html'));
});

app.get("/jfile", (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
});

app.get("/contact", (req, res) => {
    res.json({ name: "John Doe", email: "abc@gmail.com", phone: "1234567890" });
});


app.post("/add", (req, res) => {
    res.send("Information submitted successfully!");
});

app.put("/update", (req, res) => {
    res.send("Information updated successfully!");
});

app.delete("/delete", (req, res) => {
    res.send("Information deleted successfully!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



