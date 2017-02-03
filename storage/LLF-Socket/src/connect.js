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
            console.log(msg);
        });
        connect.socket.on('reg complete', function(msg) {
            var size = 0;
            for (var key in msg[0]) {
                if (msg[0].hasOwnProperty(key)) {
                    size++;
                }
            }
            if (size == 2) {
                for (var value in msg[0]) {
                    if (value == msg[1]) {
                        foot.users = value;
                        panel.chips = msg[0][value][1];
                        title.update();
                    } else {
                        opponentl.userin([value, msg[0][value][1]], 1);
                    }
                }
            } else if (size == 1) {
                for (var my in msg[0]) {
                    foot.users = my;
                    panel.chips = msg[0][my][1];
                    title.update();
                }
            }
        });
        connect.socket.on('start', function(msg) {
            console.log(msg);
            layer.msg('<i class="fa fa-cog"></i> <strong>Game</strong><p class="larger-text-meng">Game Start!</p>', {
                anim: 5
            });
            
        });
        connect.socket.on('full', function(msg) {
            console.log(msg);
        });
        connect.socket.on('userleft', function(msg) {
            console.log(msg);
        });
        connect.reg();
    },
    send: function(content) {
        connect.socket.emit('message', content);
        console.log('done');
    },
    reg: function() {
        $.ajax({
            url: '../php/getusername.php',
            type: 'GET',
            data: {},
            success: function(data) {
                connect.socket.emit('user reg', data);
            },
            error: function() {
                console.log("ERROR");
            }
        });
    }
};
connect.runf();
