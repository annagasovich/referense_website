'use strict';

Array.prototype.remove = function(value, limit) {
    limit = limit || this.length;
    return this.filter(function(el) {
        if (limit && value == el) {
            limit--;
        } else {
            return el;
        }
    });
}