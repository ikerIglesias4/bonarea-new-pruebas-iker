const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/bonarea-new-pruebas-iker'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/bonarea-web-pruebas-iker/index.html'));});
app.listen(process.env.PORT || 8080);