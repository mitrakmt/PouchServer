let express = require('express')
let app = express()
let logger = require('morgan')
let bodyParser = require('body-parser')
let path = require('path')
let cors = require('cors')
let moment = require('moment')
let helmet = require('helmet')
let jwt = require('jsonwebtoken')
let rootRouter = require('./router')
let db = require('./db')
let PORT = process.env.PORT || 8000
let request = require('request-promise')
require('dotenv').config();

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/api', rootRouter)

app.listen(PORT, () => {
  console.log('Listening on port ', PORT)
})
