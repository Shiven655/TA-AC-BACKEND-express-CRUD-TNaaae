var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
mongoose.connect(' mongodb://127.0.0.1:27017/user-diary', (err) => {
  console.log(err ? err : 'connected to Database');
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middlewares
app.use('/user', require('./routes/user'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//404 error
app.use((req, res, next) => {
  res.send('page not found');
});
//custom error
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(4000, () => {
  console.log('server is listening on port:4000');
});
