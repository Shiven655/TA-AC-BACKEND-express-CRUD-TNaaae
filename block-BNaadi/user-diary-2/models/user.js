let mongoose = require('mongoose');
let schema = mongoose.schema;

let userSchema = new schema(
  {
    name: { type: String, required: true },
    email: String,
    age: Number,
    bio: String,
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSchema);
module.exports = User;
