const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    ID: {
        type: Number
    },
    NAME: {
        type: String
    }
});

module.exports = mongoose.model('state', stateSchema);