import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}
function message(msg, cb) {
    socket.on('error', function (err) {
        console.log('received socket error:');
        console.log(err)
    });
    console.log("MEssageee", { message: msg }, cb);
    socket.emit('message', { message: msg.text }, cb)
}

export { subscribeToTimer, message };

// function registerHandler(onMessageReceived) {
//     socket.on('message', onMessageReceived)
// }
//
// function unregisterHandler() {
//     socket.off('message')
// }
//
// socket.on('error', function (err) {
//     console.log('received socket error:')
//     console.log(err)
// });
//
// function register(name, cb) {
//     socket.emit('register', name, cb)
// }
//
// function join(chatroomName, cb) {
//     socket.emit('join', chatroomName, cb)
// }
//
// function leave(chatroomName, cb) {
//     socket.emit('leave', chatroomName, cb)
// }



