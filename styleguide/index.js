const express = require('express');
const port = process.env.PORT || 8000;

const app = express();
app.use(express.static('./'));

app.listen(port);
console.log('server listening on http://localhost:'+port);