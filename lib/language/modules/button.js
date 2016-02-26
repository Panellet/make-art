/*
 * Shapes language module
 *
 * Collection of shape commands
 */

var session = require('../session'),
    utils = require('../utils')
    id = 0;

function button(name, callback) {
    var inp = window.document.createElement('button');
    inp.innerHTML = name;
    inp.setAttribute('id', 'button-' + id);
    id++;
    window.document.getElementById('htmlDisplay').appendChild(inp);
    var rect = inp.getBoundingClientRect();
    inp.style.position = 'absolute';
    inp.style.top = session.pos.y - (rect.height) + 'px';
    inp.style.left = session.pos.x - (rect.width / 2) + 'px';
    inp.style.zIndex = '1';

    function onClick() {
        (callback || function () {}).call(inp);
    }
    inp.onclick = onClick;
    inp.ontap = onClick;
}

function reset() {
    for (var i = 0; i <= id; i++) {
        var el = document.getElementById('button-' + i);
        if (el) {
            document.getElementById('htmlDisplay').removeChild(el);
        }
    }
    id = 0;
}

module.exports = {
    button: button,
    reset: reset
};