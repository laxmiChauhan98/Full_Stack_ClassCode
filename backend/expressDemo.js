const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is our first express server.')
})

app.get('/about', (req, res) => {
  res.send('This is the About page.')
})

app.get('/services', (req, res) => {
 res.sendFile(path.join(__dirname, 'index.html'));
})  
app.get('/contact', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'data.json'));
})

app.post('/', (req, res) => {
    res.send('Information submitted successfully!')
})
 app.put('/', (req, res) => {
    res.send('Information updated successfully!')
})
app.delete('/', (req, res) => {
    res.send('Information deleted successfully!')
})



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})


