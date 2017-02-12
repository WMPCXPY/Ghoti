(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @version Alpha 0.1.91
 */
var Cp$ = {
    Caper: function (target, data) {
        var capersettings = {
            mode: 'countup',
            start: 0,
            end: 233,
            decimal: 0,
            duration: 500,
            startstring: '',
            endstring: ''
        };
        for (var i in data) {
            capersettings[i] = data[i];
        }
        var re = Cp$.caperjs.verify.mode(target, capersettings);
    },
    caperjs: {
        analysisdata: function (data) {

        },
        caper: {
            countup: function (target, data) {
                var startVal = data.start;
                var endVal = data.end;
                var decimal = data.decimal;
                var duration = data.duration;
                var elem = document.getElementById(target);
                var value;

                function startCount(time) {
                    //after one run, requestAnimationFrame will applay timestamp to s
                    value = startVal + (endVal - startVal) * (time / duration);
                    value = Math.min(endVal, value);
                    elem.innerHTML = value.toFixed(decimal);
                    if (time < duration) {
                        requestAnimationFrame(startCount);
                    }
                    console.log(time);
                }
                requestAnimationFrame(startCount)
            },
            countdown: function () {

            },
            //old method of iter
            iter: function (target, data) {
                var elem = document.getElementById(target);
                var startstring = data.startstring;
                var endstring = data.endstring;
                var duration = data.duration;
                var frame = 6;
                console.log(frame);
                requestAnimationFrame(startCount);

                function startCount(time) {
                    //after one run, requestAnimationFrame will applay timestamp to s
                    if (frame < 6) {
                        frame++;
                        requestAnimationFrame(startCount);
                        console.log(frame);
                    } else {
                        value = Cp$.caperjs.random.string(15);
                        elem.innerHTML = value;
                        if (time < duration) {
                            requestAnimationFrame(startCount);
                        }
                        frame = 0;

                        console.log(frame);
                    }
                }

            },
            //new method
            iternew: function (target, data) {
                var elem = document.getElementById(target);
                var tar = data.endstring;
                var value = data.startstring;
                if (tar.length != value.length) {
                    value = Cp$.caperjs.random.string(tar.length);
                }
                // var value = Cp$.caperjs.random.string(tar.length);
                var count = 0;
                var dur = Math.min(data.duration, 65);
                setTimeout(itrr, dur);

                function itrr() {
                    value = howmuchsame(tar, value);
                    elem.innerHTML = value;
                    if (tar != value) {
                        count++;
                        setTimeout(itrr, dur);
                    } else {
                        console.log('DONE' + count);
                    }
                }

                function howmuchsame(tar, val) {
                    for (var i = 0; i < tar.length; i++) {
                        if (val.charAt(i) != tar.charAt(i)) {
                            var ran = Cp$.caperjs.random.string(1);
                            val = val.substring(0, i) + ran + val.substring(i + 1, val.length);
                        }
                    }
                    return val;
                }
            }
        },
        verify: {
            mode: function (target, data) {
                if (data.hasOwnProperty('mode')) {
                    switch (data.mode) {
                        case 'countup':
                            Cp$.caperjs.caper.countup(target, data);
                            break;
                        case 'countdown':
                            Cp$.caperjs.caper.countdown(target, data);
                            break;
                        case 'gen':
                            Cp$.caperjs.caper.iternew(target, data);
                            break;
                        default:
                            Cp$.caperjs.caper.countup(target, data);
                    }
                } else {
                    Cp$.caperjs.caper.countup(target, data);
                }
                return data;
            },
            string: function (data) {
                if (data.hasOwnProperty('start')) {
                    return data.start;
                }
                return Cp$.caperjs.random.string(10);
            },
            stringend: function (data) {
                if (data.hasOwnProperty('end')) {
                    return data.end;
                }
                return Cp$.caperjs.random.string(10);
            }
        },
        random: {
            string: function (length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.!@#$%^&*()";

                for (var i = 0; i < length; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
            int: function (length) {
                return Math.random(length);
            }
        }
    },
    ajax: {
        caperajax: function (inin) {
            //default
            var ajaxsettings = {
                //default GET
                method: 'GET',
                //default link
                url: './main.php',
                data: '',
                async: true,
                cache: true,
                //form 'application/x-www-form-urlencoded'
                contentType: 'application',
                success: function (data) {
                    console.log(data);
                },
                error: function (error) {
                    console.log(error);
                }
            };
            //inin method
            for (var i in inin) {
                ajaxsettings[i] = inin[i];
            }
            //create object
            if (typeof ajaxsettings.data === 'object') {
                var str = '';
                var value = '';
                for (var key in ajaxsettings.data) {
                    value = ajaxsettings.data[key];
                    //replace & in url
                    if (ajaxsettings.data[key].indexOf('&') !== -1) {
                        value = ajaxsettings.data[key].replace(/&/g, escape('&'));
                    }
                    //replace & in key
                    if (key.indexOf('&') !== -1) {
                        key = key.replace(/&/g, escape('&'));
                    }
                    str += key + '=' + value + '&';
                }
                ajaxsettings.data = str.substring(0, str.length - 1);
            }
            //cache
            ajaxsettings.cache = ajaxsettings.cache ? '' : '&' + new Date().getTime();
            //method
            ajaxsettings.method = ajaxsettings.method.toUpperCase();
            //chche url
            if (ajaxsettings.method === 'GET' && (ajaxsettings.data || ajaxsettings.cache)) {
                ajaxsettings.url += '?' + ajaxsettings.data + ajaxsettings.cache;
            }
            var ajaxobject = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            //shake with server
            ajaxobject.open(ajaxsettings.method, ajaxsettings.url, ajaxsettings.async);
            //send request
            if (ajaxsettings.method === 'GET')
                ajaxobject.send(null);
            else {
                ajaxobject.setRequestHeader("Content-type", ajaxsettings.contentType);
                ajaxobject.send(ajaxsettings.data);
            }
            //waiting for response
            ajaxobject.onreadystatechange = function () {
                if (ajaxobject.readyState === 4) {
                    if (ajaxobject.status === 200)
                        ajaxsettings.success.call(oXhr, oXhr.responseText);
                    else {
                        ajaxsettings.error();
                    }
                }
            };
        }
    }
}