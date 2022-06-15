let express = require('express');
let router = express.router();

router.get('/', (req, res) => {
  res.render('index');
});
module.exports = router;
