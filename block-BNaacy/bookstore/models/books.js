let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    description: { type: String },
    price: Number,
    author: String,
    title: String,
  },
  { timestamps: true }
);

let User = mongoose.model('user', userSchema);

module.exports = User;
