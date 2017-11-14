var priceTable = require('./prices');

var _ = require('lodash');

module.exports = function (orderItem) {

    var itemPrices = priceTable[orderItem.item] && priceTable[orderItem.item].prices;
    var qtyRemaining = orderItem.qty;
    var cost = 0;

    if(itemPrices) {
        while (qtyRemaining > 0) {
            _.forEachRight(itemPrices, function (itemPrice) {
                var numAtPrice = Math.floor(qtyRemaining / itemPrice.qty);
                cost += numAtPrice * itemPrice.price;
                qtyRemaining -= (numAtPrice * itemPrice.qty);
            });
        }
    }

    return cost;
};