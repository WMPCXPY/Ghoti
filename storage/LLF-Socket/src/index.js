(function() {
    'use strict';
}());
// v-html need to be updated
var interesting = {
    daytime: function() {
        var now = new Date();
        var hour = now.getHours();
        appmain.title = '<img src="./style/ico/icon.png" width="50px"/>';
        if (hour < 6) {
            appmain.title += "It's <strong>Early Morning</strong>";
        } else if (hour < 9) {
            appmain.title += "Good <strong>Morning</strong>";
        } else if (hour < 12) {
            appmain.title += "Yeah <strong>:D</strong>";
        } else if (hour < 14) {
            appmain.title += "It's <strong>Noon</strong>";
        } else if (hour < 17) {
            appmain.title += "Good <strong>Afternoon</strong>";
        } else if (hour < 19) {
            appmain.title += "Good <strong>Evening</strong>";
        } else if (hour < 22) {
            appmain.title += "It's <strong>Late</strong>";
        } else {
            appmain.title += "Sleep <strong>Tight</strong>";
        }
    }
};
var appmain = new Vue({
    el: '#index',
    data: {
        title: 'Hello Vue!',
        ho: 'Login to <i class="fa fa-chevron-circle-right"></i><br><strong>LandlordFighter</strong>:',
        ht: 'User Sign-Up is disabled.',
        bt: '<strong>NOW!</strong>',
        ann: 'LandlordFighter is a close register site until now. Send Email to request@wmpcxpy.com for account open',
        username: '',
        password: '',
        output: 'We are in <strong>Developing</strong> mode.  <i class="fa fa-github-square"></i>',
        mode: 0,
        displaymode: 7,
        memorydistroyer: 7,
        buttondis: true,
        completeed: false
    },
    methods: {
        login: function() {
            appmain.buttondis = true;
            appmain.bt += '  <i class="fa fa-spinner fa-spin"></i>';
            var submitpass = md5(appmain.password);
            $.ajax({
                url: './php/log.php',
                type: 'POST',
                data: {
                    'username': appmain.username,
                    'password': submitpass,
                    'mode': appmain.mode
                },
                success: function(data) {
                    appmain.output = data;
                    try {
                        ouc = JSON.parse(data);
                        appmain.memorydistroyer = appmain.displaymode;
                        appmain.displaymode = ouc[0];
                        appmain.displaymessage(ouc);
                    } catch (error) {
                        appmain.output = data;
                        console.log(error);
                    }

                },
                error: function() {
                    console.log("ERROR");
                }
            });
        },
        inputing: function() {
            if (!appmain.completeed) {
                if (appmain.username == 'wengyejibada') {
                    appmain.memorydistroyer = appmain.displaymode;
                    appmain.displaymode = 6;
                    appmain.displaymessage("meh");
                } else {
                    appmain.displaymode = appmain.memorydistroyer;
                    appmain.displaymessage("meh");
                }
                if (appmain.username.length < 1 || appmain.password.length < 1) {
                    appmain.buttondis = true;
                } else {
                    appmain.buttondis = false;
                }
            }
        },
        popover: function() {
            console.log('?');
            $("#overr").popover();
        },
        displaymessage: function(data) {
            switch (appmain.displaymode) {
                case 0:
                    appmain.output = '<strong>Username</strong> does not <strong>Exist</strong>.';
                    appmain.output += '  <i class="fa fa-reply-all"></i>';
                    appmain.bt = 'NOW!';
                    break;
                case 1:
                    appmain.output = '<strong>Welcome ' + data[1] + '</strong>.';
                    appmain.output += '  <i class="fa fa-ravelry"></i>';
                    appmain.bt = 'Completed!';
                    appmain.completeed = true;
                    $.ajax({
                        url: './php/sleep.php',
                        type: 'GET',
                        data: {},
                        success: function(data) {
                            window.location.href = './game/';
                        },
                        error: function() {
                            console.log("ERROR");
                        }
                    });
                    break;
                case 2:
                    appmain.output = '<strong>Password</strong> is not <strong>Correct</strong>.';
                    appmain.output += '  <i class="fa fa-chain-broken"></i>';
                    appmain.bt = 'NOW!';
                    break;
                case 3:
                    appmain.output = '<strong>Format Error</strong>';
                    appmain.output += '  <i class="fa fa-strikethrough"></i>';
                    appmain.bt = 'NOW!';
                    break;
                case 4:
                    appmain.output = '<strong>Cookie</strong> is not <strong>Marched</strong>.';
                    appmain.output += '  <i class="fa fa-window-restore"></i>';
                    appmain.completeed = true;
                    appmain.bt = 'Error!';
                    break;
                case 5:
                    appmain.output = '<strong>Cookie</strong> is not <strong>Exist</strong>.';
                    appmain.output += '  <i class="fa fa-bars"></i>';
                    appmain.completeed = true;
                    appmain.bt = 'Stop Trying!';
                    break;
                case 6:
                    appmain.output = '<a href="./yeah/">Click to <strong>Register</strong> page.</a>';
                    appmain.output += '  <i class="fa fa-ticket"></i>';
                    appmain.bt = 'NOW!';
                    break;
                case 7:
                    appmain.output = 'We are in <strong>Developing</strong> mode.  <i class="fa fa-github-square"></i>';
                    break;
                default:
                    appmain.output = data;
            }
        }
    }
});
