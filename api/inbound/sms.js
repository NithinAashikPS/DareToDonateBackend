const express = require('express');
const router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/', (req, res) => {

    const twiml = new MessagingResponse();
    console.log(req.body.Body);
    console.log(req.body.From);

    twiml.message('Reply Message');
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());

});

module.exports = router;