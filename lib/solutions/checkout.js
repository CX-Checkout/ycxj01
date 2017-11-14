'use strict';
var buildOrderItemsFromInput = require('./build-order-items-from-input');
var calcOrderTotal = require('./calc-order-total');
var _ = require('lodash');

function isInvalidOrder(order) {
    if(order === -1) return true;
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {

    if(!skus){
        return 0;
    }

    var orderItems = buildOrderItemsFromInput(skus, ",");

    if(isInvalidOrder(orderItems)) return -1;

    return calcOrderTotal(orderItems);
};
