(function() {
    'use strict';
}());
var connect = {
    socket: io('http://127.0.0.1:3120'),
    runf: function() {
        connect.socket.on('connect', function() {
            console.log('connect success');
        });
        connect.socket.on('chat message from server', function(msg) {
            console.log('get message:' + msg + ' from server');
        });
    },
    send: function(content) {
        connect.socket.emit('chat message', content);
    }
};
connect.runf();
