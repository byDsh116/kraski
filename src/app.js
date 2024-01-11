require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routers/index-router');
const userRouter = require('./routers/user-router');

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const app = express();
const { PORT } = process.env;

const storeConfig = {
  name: 'Dsh',
  store: new FileStore(),
  secret: 'lalala',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 1000,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), '/public/')));
app.use(express.json());
app.use(expressSession(storeConfig));
app.use(morgan('dev'));
app.use('/', indexRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT===> ${PORT}`);
});
