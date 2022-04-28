var express = require('express');
var mongoose = require('mongoose');
let path = require('path');
//mongo db connect
mongoose.connect('mongodb://localhost/school', (err) => {
  console.log(err ? err : 'Database is connected Successfully');
});

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use((req, res, next) => {
  res.locals.message = 'Hello World!';
  next();
});
app.get('/', (req, res) => {
  res.render('index', { name: 'Shiven' });
});

app.listen(4000, () => {
  console.log('server is listning on 4k');
});
