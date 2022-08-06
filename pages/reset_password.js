const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const d2dUser = require('../api/models/user');

router.get('/resetPassword', (req, res, next) => {
    res.render('resetPassword');
});

router.post('/changePassword', async(req, res, next) => {

    try {
        const data = req.body;
        const decoded = jwt.verify(data.token, process.env.JWT_SECRET);

        let salt = await bcryptjs.genSalt(10);
        const payload = {
            phone: decoded.phone
        }
        payload.password = await bcryptjs.hash(data.password, salt);

        let passwordUpdate = await d2dUser.findOneAndUpdate({
            phone: decoded.phone
        }, payload, {
            new: true
        });

        let result = await passwordUpdate.save();
        if (!result)
            return res.render('failed');

    } catch (err) {
        return res.render('failed');
    }
    return res.render('success');
});

module.exports = router;