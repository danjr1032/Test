const mongoose = require ("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  fullName: {
    type: String,
    required: true
  },

  phone: {
    type: Number,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;


