var adjustOrderForFreebies = require('./adjust-order-for-freebies')
var calcPriceForOrderItem = require('./calc-price-for-order-item')
var _ = require('lodash');

module.exports = function (orderItems) {

    orderItems = adjustOrderForFreebies(orderItems);

    var total = 0;
    _.forEach(orderItems, function (orderItem) {
        var priceForOrderItem = calcPriceForOrderItem(orderItem);
        total += priceForOrderItem;
    });

    return total;
    
}