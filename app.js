const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World, my name is Hau!')
})

app.listen(PORT)
  console.log('Listening on port ${ PORT }')
