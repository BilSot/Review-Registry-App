const express = require('express');
const path = require('path');
const rootPath = path.normalize(__dirname);
const app = express();
const bodyParser = require('body-parser');
const paths = require('./paths');

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', paths);
app.get('*', (req, res) => {
    res.sendFile(`${rootPath}/index.html`);
});

app.listen(8000);
console.log("server running on port 8000");
