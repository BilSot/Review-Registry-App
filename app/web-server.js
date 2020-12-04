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

app.use((err, req, res, next) => {
    err.status = err.status ? err.status : 500;
    if(err.status === 404) {
        err.message = 'The page you\'re looking for doesn\'t exist';
    }else if(err.status === 500){
        err.message = 'Unexpected error :( Try again later';
    }
    console.error(err.stack);
    res.status(err.status).json({error: err});
});

app.get('*', (req, res) => {
    res.sendFile(`${rootPath}/index.html`);
});

var port = normalizePort(process.env.PORT || '8000');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
app.set('port', port);
app.listen(port);

console.log("server running on port 8000");
