require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user.routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser())
app.use('/',userRoute)
app.use(errorHandler);
module.exports = app