const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  user: {
    type: String,
    default: 'anyUser'
  },
  info: {
    type: String,
    required: true
  },
  method: {
    type: String,
  },
  creatingDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("log", logSchema);
