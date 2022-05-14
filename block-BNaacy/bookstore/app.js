var express = require('express');
var mongoose = require('mongoose');
let path = require('path');

let indexRouter = require('./routes/index');
let bookRouter = require('./router/books');
//db connect
mongoose.connect('mongoose://localhost/bookstore', (err) => {
  console.log(err ? err : 'database is successfully connected');
});

//server instantiate
let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/books', bookRouter);

app.use((req, res, next) => {
  res.send('page not found!');
});
app.use((err, req, res, next) => {
  res.send(err);
});
//listner
app.listen(3000, () => {
  console.log('Server is listning on port 3k');
});
