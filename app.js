const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, my name is Hau!')
})

app.listen(3000)