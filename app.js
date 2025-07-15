const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser())
module.exports = app