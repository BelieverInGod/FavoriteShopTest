const express = require('express');
const path = require('path');
const app = express();
const router = express.Router()
const port = process.env.PORT || 8080;
app.use(express.static('build'))

router.post('/')

app.get('/*', function(req,res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.listen(port, () => {
    console.log('Server is up!');
});
