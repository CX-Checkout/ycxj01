var priceTable = require('./prices');
var _ = require('lodash');

module.exports = function (order) {

    _.forEach(order, function (orderItem) {
       var freebies = priceTable[orderItem.item] && priceTable[orderItem.item].freebies;
       if(freebies){
           var numFreebies = Math.floor(orderItem.qty / freebies.every) * freebies.freeQty;
           if(numFreebies > 0){
               var freeOrderItem = _.find(order, {item: freebies.freeItem});
               if(freeOrderItem){
                   freeOrderItem.qty -= numFreebies;
                   freeOrderItem.qty = freeOrderItem.qty < 0 ? 0 : freeOrderItem.qty;
               }
           }
       }
    });

    return order;
};
