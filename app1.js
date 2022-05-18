const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/Home', (req, res) => {
  res.send('This is our home page')
})
app.get('/About', (req, res) => {
    res.send('About Page')
  })
  app.get('/Update', (req, res) => {
    res.send('Update About homepage')
  })
  app.get('/Delete', (req, res) => {
    res.send('Delete!')
  })

app.listen(port, () => {
  console.log(`Harshal's app listening on port ${port}`)
})