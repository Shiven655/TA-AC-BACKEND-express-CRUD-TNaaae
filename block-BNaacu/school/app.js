let express = require('express');
let mongoose = require('mongoose');
let path = require('path');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'DataBase is connected successfully');
});

let app = express();
//middleware
app.use('/students', require('./routes/students'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(index.ejs);
});
//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

//handle error
app.use((req, res, next) => {
  res.status(404).send('page not found');
});

//listener
app.listen(4000, () => {
  console.log('server is listening on port:4000');
});
