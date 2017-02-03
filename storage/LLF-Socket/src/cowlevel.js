(function() {
    'use strict';
}());
// v-html need to be updated
var interesting = {
    daytime: function() {
        var now = new Date();
        var hour = now.getHours();
        appmain.title = '<img src="../style/ico/icon.png" width="50px"/>';
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
        ho: 'Regist to <i class="fa fa-user-plus"></i><br><strong>LandlordFighter</strong>:',
        ht: 'Password contain !@_ symbols. <i class="fa fa-gg-circle"></i>',
        bt: '<strong>Register!</strong>',
        ann: 'LandlordFighter is a close register site until now. Send Email to request@wmpcxpy.com for account open',
        username: '',
        password: '',
        output: 'We are in <strong>Developing</strong> mode.  <i class="fa fa-github-square"></i>',
        mode: 0,
        displaymode: 7,
        memorydistroyer: 7,
        buttondis: true,
        completeed: false,
        url: '../php/register.php'
    },
    methods: {
        login: function() {
            appmain.buttondis = true;
            appmain.bt += '  <i class="fa fa-spinner fa-spin"></i>';
            var submitpass = md5(appmain.password);
            $.ajax({
                url: appmain.url,
                type: 'POST',
                data: {
                    'username': appmain.username,
                    'password': submitpass
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
            appmain.displaymessage("meh");
            if (!appmain.completeed) {
                if (appmain.username == 'potatoandfish') {
                    appmain.memorydistroyer = appmain.displaymode;
                    appmain.bt = '<strong>Sure!</strong>';
                    appmain.url = '../php/clean.php';
                    appmain.displaymode = 6;
                    appmain.displaymessage("meh");
                } else {
                    appmain.displaymode = appmain.memorydistroyer;
                    appmain.url = '../php/register.php';
                    appmain.bt = '<strong>Register!</strong>';
                    appmain.displaymessage("Over");
                }
                if (appmain.username.length < 1 || appmain.password.length < 1) {
                    appmain.buttondis = true;
                } else {
                    appmain.buttondis = false;
                }
            }
        },
        displaymessage: function(data) {
            switch (appmain.displaymode) {
                case 6:
                    appmain.output = 'Click <strong>Sure</strong> to <strong>Clean</strong>.';
                    appmain.output += '  <i class="fa fa-free-code-camp"></i>';
                    appmain.bt = 'Register!';
                    break;
                case 7:
                    appmain.output = 'We are in <strong>Developing</strong> mode.  <i class="fa fa-github-square"></i>';
                    appmain.bt = 'Register!';
                    break;
                case 8:
                    appmain.output = 'Username <strong>' + data[1] + '</strong> already <strong>Exist</strong>.  <i class="fa fa-minus-square"></i>';
                    appmain.bt = 'Register!';
                    break;
                case 9:
                    appmain.output = '<strong>Registed</strong> the Key is <strong>' + data[1] + '</strong>.  <i class="fa fa-plus-circle"></i>';
                    appmain.bt = 'Completed!';
                    appmain.completeed = true;
                    break;
                case 44:
                    appmain.output = '101010001010111010101000101101011001010';
                    appmain.output += '  <i class="fa fa-motorcycle"></i>';
                    appmain.bt = '10101001101111011110';
                    appmain.completeed = true;
                    break;
                case 45:
                    appmain.output = '<strong>' + data[1] + '</strong> of Users are <strong>Gone</strong>.';
                    appmain.output += '  <i class="fa fa-american-sign-language-interpreting"></i>';
                    appmain.bt = '<strong>Gone!</strong>';
                    appmain.completeed = true;
                    break;
                default:
                    appmain.output = data;
            }
        }
    }
});
