(function() {
    'use strict';
}());
var defind = {
    cardsize: 75,
    handsize: 157,
    start: function() {
        opponentl.userin(['who', 78600], 1);
    }
};
var definds = {
    cardback: window.Poker.getBackData(defind.cardsize, '#8F9396', '#5C6063'),
    large: window.Poker.getBackData(defind.handsize, '#8F9396', '#5C6063')
};
var foot = new Vue({
    el: '#foot',
    data: {
        users: 'Loading',
        chips: 0,
        actions: ['', '', ''],
        amounts: [0, 0, 0],
        allin: 0,
        buttonone: '',
        buttontwo: '',
        buttonthr: ''
    },
    methods: {
        test: function() {
            main.cardone = window.Poker.getCardData(157, 'd', 'JOKER');
            console.log(window.Poker.getCardData(157, 'd', 'JOKER'));
        }
    }
});
var main = new Vue({
    el: '#main',
    data: {
        cardone: definds.large,
        cardtwo: definds.large
    },
    methods: {

    }
});
var players = new Vue({
    el: '#players',
    data: {
        waitinglist: [],
        ingamelist: [],
        waitdisplay: 0,
        ingamedisplay: 0
    },
    methods: {
        playersin: function(user) {

        },
        update: function() {
            players.waitdisplay = players.waitinglist.length;
            players.ingamedisplay = players.ingamelist.length;
        }
    }
});
var opponentl = new Vue({
    el: '#opponentl',
    data: {
        display: '<i class="fa fa-camera-retro fa-rotate-90"></i> Waiting For Game',
        introone: '',
        introtwo: '',
        actionone: '',
        actiontwo: '',
        user: '',
        chips: 0
    },
    methods: {
        userin: function(user, location) {
            opponentl.updateintro(user, location);
            opponentl.updateaction('<i class="fa fa-hand-spock-o"></i> Just<strong>Came in</strong>', location);
            opponentl.update();
        },
        updateintro: function(user, location) {
            var id = user[0];
            var chips = user[1];
            switch (location) {
                case 1:
                    opponentl.introone = 'ID: <strong>' + id +
                        '</strong><br>Chips: <strong><i class="fa fa-money"></i> ' +
                        chips + '</strong><hr>';
                    break;
                case 2:
                    opponentl.introtwo = 'ID: <strong>' + id +
                        '</strong><br>Chips: <strong><i class="fa fa-money"></i> ' +
                        chips + '</strong><hr>';
                    break;
            }
        },
        bet: function(amount, location) {

        },
        updateaction: function(string, location) {
            switch (location) {
                case 1:
                    opponentl.actionone = string + '<hr>';
                    break;
                case 2:
                    opponentl.actiontwo = string;
                    break;
            }
        },
        userout: function() {

        },
        update: function() {
            opponentl.display = '<strong>Opponents</strong><hr>' +
                opponentl.introone + opponentl.actionone +
                opponentl.introtwo + opponentl.actiontwo;
        }
    }
});
var opponentr = new Vue({
    el: '#opponentr',
    data: {
        oppon: []
    },
    methods: {

    }
});
var pool = new Vue({
    el: '#pool',
    data: {
        current: '<i class="fa fa-angle-right"></i> FLOP',
        card1: definds.cardback,
        card2: definds.cardback,
        card3: definds.cardback,
        card4: definds.cardback,
        card5: definds.cardback
    },
    methods: {}
});
var panel = new Vue({
    el: '#panel',
    data: {
        chips: 0,
        one: '<i class="fa fa-superpowers"></i> Cash In',
        two: '<i class="fa fa-forumbee"></i> Cash Out',
        three: '<i class="fa fa-bandcamp"></i> Buy Chips',
        four: '<i class="fa fa-cog"></i> Setting',
        five: '<i class="fa fa-github-alt"></i> Test'
    },
    methods: {
        ones: function() {
            layer.prompt({
                title: 'Buy in',
                btn: ['<strong>Confirm</strong>', 'Cancel'],
                formType: 3
            }, function(amount, index) {
                layer.close(index);
                if (!isNaN(amount)) {
                    if (amount <= panel.chips) {
                        panel.chips -= amount;
                        foot.chips += parseInt(amount);
                    } else {
                        layer.msg('Not Enough Chips', {
                            anim: 5
                        });
                    }
                } else {
                    layer.msg('Input Have to be a Number', {
                        anim: 5
                    });
                }
            });
        },
        twos: function() {

        },
        threes: function() {

        },
        fours: function() {

        },
        fives: function() {

        }
    }
});
var title = new Vue({
    el: '#title',
    data: {
        left: '<strong>LandlordFighter</strong>',
        right: foot.users
    },
    methods: {
        logout: function() {
            console.log('logout');
        },
        update: function() {
            title.right = foot.users;
        }
    }
});
