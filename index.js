const express = require('express');

const app = express();
const port = 3000;
app.listen(port, () => {console.log('WebApp started on port 3000')});
app.use(express.static('public'));