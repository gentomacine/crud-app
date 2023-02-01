const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['personal', 'work'],
        default: 'personal'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;