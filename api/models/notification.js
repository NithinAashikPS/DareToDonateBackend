const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'requests',
        required: true,
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
});

module.exports = mongoose.model('Notifiation', notificationSchema);