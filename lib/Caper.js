(function () {
    'use strict';
}());

function Caper(target, data) {
    if (data.hasOwnProperty('start')) {
        startVal = data.start;
    } else {
        console.log('Start Must Be annonced');
    }
    if (data.hasOwnProperty('end')) {
        endVal = data.end;
    } else {
        console.log('End Must Be annonced');
    }
    if (data.hasOwnProperty('dec')) {
        decimal = data.dec;
    } else {
        decimal = 0;
    }
    if (data.hasOwnProperty('cont')) {
        duration = data.cont * 100;
    } else {
        duration = 1000;
    }
    var elem = document.getElementById(target);
    var value;

    function startCount(time) {
        //after one run, requestAnimationFrame will applay timestamp to s
        value = startVal + (endVal - startVal) * (time / duration);
        // value = Math.max(endVal, value);
        elem.innerHTML = value.toFixed(decimal);
        if (time < duration) {
            requestAnimationFrame(startCount);
        }
        console.log('once');
    }
    requestAnimationFrame(startCount)
}