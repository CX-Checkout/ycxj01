var priceTable = {
    'A': [
        { qty: 1, price: 50 },
        { qty: 3, price: 130 }
    ],
    'B' : [
        { qty: 1, price: 30 },
        { qty: 2, price: 45 }
    ],
    'C' : [
        { qty: 1, price: 20 }
    ],
    'D' : [
        { qty: 1, price: 15 }
    ]
};
var _ = require('lodash');

module.exports = function (orderItem) {

    var itemPrices = priceTable[orderItem.item];
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
