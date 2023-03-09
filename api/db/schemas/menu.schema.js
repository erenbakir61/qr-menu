const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    type: {
        type: String,
        required: true
    },
    creatingDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("menu", menuSchema);
