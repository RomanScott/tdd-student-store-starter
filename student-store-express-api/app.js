const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/store', routes)

app.get('/', (req, res) => {
  res.status(200).send({ "ping": "pong" })
})

module.exports = app