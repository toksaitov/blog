const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;
const server = express();

const entries = [];

server.set('view engine', 'ejs');

server.use(express.static(__dirname + '/static'));
server.use(bodyParser.urlencoded({ 'extended': true }));

server.get('/', (request, response) => {
    response.render('index', {
        'entries': entries
    });
});

server.get('/entry/:id', (request, response) => {
    const id = request.params['id'];
    if (id) {
        const entry = entries[id];
        if (entry) {
            response.render('entry', { 'entry': entry });

            return;
        }
    }

    response.redirect('/');
});

server.post('/', (request, response) => {
    const title = request.body.title;
    const message = request.body.message;
    if (title && message) {
        entries.push({ 'title': title, 'message': message });
    }

    response.redirect('/');
});

server.listen(port, () => {
    console.log(`The server is listening on port '${port}'.`);
})

