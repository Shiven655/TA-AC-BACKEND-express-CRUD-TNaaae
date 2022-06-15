let express = require('express');
const User = require('../models/user');
let user = require('../models/user');

let router = express.Router();

router.get('/', (req, res) => {
  user.find({}, (err, users) => {
    if (err) {
      return err;
    }
    res.render('users', { users: users });
  });
});
router.get('new', (req, res) => {
  res.render('userForm');
});
router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      return next(err);
    }
    res.render('userDetails', { user: user });
  });
});
router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      return next(err);
    }
    res.render('editForm', { user: user });
  });
});
router.post('/:id/edit', (req, res) => {
  let id = res.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users/' + id);
  });
});
router.get('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});

router.delete('/:id/delete', (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});

module.exports = router;
