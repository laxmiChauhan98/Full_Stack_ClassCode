const express = require('express');
const mongoose = require('mongoose');
const app = express();

//mongo db connection

mongoose.connect('mongodb+srv://<password>:<password>@cluster0.murhe0v.mongodb.net/companyDB?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));  

app.get("/", (req, res) => {
  res.send("Express server connected with MongoDB");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

