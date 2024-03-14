const createError = require('http-errors');
const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const menuRouter = require('./src/modules/menu/menu.routes');
const categoryRouter = require('./src/modules/category/category.routes');
const logRouter = require('./src/modules/log/log.routes')

const app = express();
const mongoURI = 'mongodb://127.0.0.1:27017/menu';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use("/public", express.static("public"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/category', categoryRouter);
app.use('/log', logRouter);

// Multer Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/categories/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + (crypto.randomBytes(8).toString("hex"))
    cb(null, uniqueName + "." + file.mimetype.split("/")[1]);
  },
});
// images uploading on server with multer
const upload = multer({ dest: './public/images/categories/', storage: storage })

app.post('/public/images', upload.single('categoryImage'), function (req, res) {
  res.send(req.file)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send({ message: '404 route not found'});
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Database connection
mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Conntected to Database"));
module.exports = app;
