import './functions.js';

;(function () {
    'use strict';

    window.fuckIE = !!window.MSInputMethodContext && !!document.documentMode;

    // Include js-modules
    var req = require.context("./modules", true, /_[^_].*\.(js)$/);
    req.keys().forEach(function(key){
        req(key);
    });

})();
