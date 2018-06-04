const express = require('express');

const app = express();
const port = 3005;
app.use(express.static('static'));

app.listen(port, function() {
    console.log(`App started on port ${port}`);
})