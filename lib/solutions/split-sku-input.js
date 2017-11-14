var _ = require('lodash');

module.exports = function (skus, delimiter) {

    var orders = skus.split(delimiter);

    orders = _.map(orders, function (order) {
        var quantityMatch = order.match(/(\d*)/);
        var itemMatch = order.match(/\d*(.*)/);
        return {
            qty: _.toInteger(quantityMatch[1]) || 1,
            item: itemMatch[1]
        };
    });

    return orders;
};
