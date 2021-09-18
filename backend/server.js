const express = require("express");
const dotenv = require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const myDatabase = require('./config/db')

myDatabase()
const app = express()

app.get('/', (req, res) =>
  res.send('Server is runnning')
)





const port = process.env.PORT || 5000
const deve = process.env.NODE_ENV || 'develop'

app.listen(port, () => 
  console.log(`Server is listening in ${deve} mode at port ${port}`.yellow.bold))