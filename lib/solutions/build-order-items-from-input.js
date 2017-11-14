var _ = require('lodash');
var products = {
    'A': true,
    'B': true,
    'C': true,
    'D': true
};

module.exports = function (skus) {

    if(!skus){
        return [];
    }

    var items = skus.split("");
    var orderItems = [];
    var isInvalidOrder = false;
    _.forEach(items, function (item) {

        if(productExists(item)) {
            var orderItem = _.find(orderItems, {item: item});
            if (!orderItem) {
                orderItem = {
                    item: item,
                    qty: 0
                };
                orderItems.push(orderItem);
            }
            orderItem.qty++;
        } else {
            isInvalidOrder = true;
        }
    });

    if(isInvalidOrder){
        return -1;
    } else {
        return orderItems;
    }
};

function productExists(product) {
    return !!products[product];
}
