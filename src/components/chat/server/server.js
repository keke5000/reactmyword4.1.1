
// Remote service at use. Please consult developers.
/*
var express = require('express');
const io = require('socket.io')();
var app = express();
const cors = require('cors');

app.use(cors());

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

io.on('connection', function(socket){
    socket.on('message', function(data){
        console.log('message on serverside: ', data);
        io.emit('receivemessage', data);
    });
});

const port = "8000";
io.listen(port);
console.log('listening on port ', port);