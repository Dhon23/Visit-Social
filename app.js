const express = require('express');
const app = express()
const port = 3000
const router = require('./routes');
const session = require('express-session');

app.use(session({
  secret: 'fun always',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true 
  }
}))

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))

app.use('/', router)

app.listen(port)