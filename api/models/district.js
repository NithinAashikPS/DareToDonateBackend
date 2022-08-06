const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
    ID: {
        type: Number
    },
    NAME: {
        type: String
    }
});

module.exports = mongoose.model('district', districtSchema);