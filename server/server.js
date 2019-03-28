const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('User connected');

    socket.on('chat-message', function(msg) {
        socket.broadcast.emit('chat-message', msg);
        console.log('message: ' + msg);
    });

    socket.on('disconnect', function() {
        console.log('User disconnected');
    });
});

http.listen(3000, function() {
    console.log('listening on port 3000');
});
