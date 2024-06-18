const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const config = require('../config')
const initRoutes = require('./routes')
const initDB = require('../db')


const app = express()
app.use(cors())
app.use(express.json())
initDB(mongoose)
initRoutes(app, mongoose)



app.listen(config.SERVER.PORT, () => console.log('Server ready.'))
