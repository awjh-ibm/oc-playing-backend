const express = require('express');
const app = express();

var port = process.env.BACKEND_PORT || 8080;
var ip = process.env.BACKEND_IP || '127.0.0.1'; 

app.get('/', (req, res) => {
    res.json({hello: 'world'});
});

app.listen(port, ip, () => {
    console.log(`Example app listening at http://${ip}:${port}`)
});
