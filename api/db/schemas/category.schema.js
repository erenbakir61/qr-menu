const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    creatingDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("category", categorySchema);
