const express = require('express')
const app = express()
const morgan = require('morgan')
const router = require('./routes/index')
const path = require('path')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)

module.exports=app