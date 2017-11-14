'use strict';
var buildOrderItemsFromInput = require('./build-order-items-from-input');
var calcPriceForForOrderItem = require('./calc-price-for-order-item');
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

    var total = 0;
    _.forEach(orderItems, function (orderItem) {
       var priceForOrderItem = calcPriceForForOrderItem(orderItem);
       total += priceForOrderItem;
    });

    return total;
};