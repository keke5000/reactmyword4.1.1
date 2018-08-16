const io = require('socket.io')();

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
//
// io.on('connection', function(socket){
//     socket.on('message', (msg) => {
//         console.log("Päästiin servun socket. ja socket emit käskyyn ja msg on: ", msg);
//         socket.emit('message', msg);
//     });
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

const port = 8000;
io.listen(port);
console.log('listening on port ', port);