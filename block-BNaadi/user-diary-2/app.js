let express = require('express');
let mongoose = require('mongoose');
let path = require('path');

let indexRouter = require('./routes/index.js');
let usersRouter = require('./routes/users.js');

//DataBase connection
mongoose.connect('mongo.db://localhost/user-diary-2', (err) => {
  console.log(err ? err : 'Database is connected successfully');
});

let app = express;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('express.static', path.join(__dirname, '/public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.send('404 Page not found!');
});
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen('3000', () => {
  console.log('server is listning on 3k');
});
