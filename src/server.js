var express = require('express')
var app = express()
const path = require('path')
var port = 3000

app.listen(port, function () {
  console.log('We are listening at port: ' + port)
})

app.use(express.static('react-client/build'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-client/build/index.html'))
})
