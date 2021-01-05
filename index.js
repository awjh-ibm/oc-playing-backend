const express = require('express');
const app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'; 

app.get('/', (req, res) => {
    res.json({timestamp: new Date().getTime()});
});

app.listen(port, ip, () => {
    console.log(`Example app listening at http://${ip}:${port}`)
});
