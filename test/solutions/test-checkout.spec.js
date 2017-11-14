var checkout = require('../../lib/solutions/checkout');
var expect = require('chai').expect;

describe('checkout', function () {
   it('should return 0 for a falsy input', function () {

       var resultForUndifined = checkout(undefined);
       var resultForNull = checkout(null);
       var resultForBlank = checkout("");

       expect(resultForUndifined).to.equal(0);
       expect(resultForNull).to.equal(0);
       expect(resultForBlank).to.equal(0);
   });

    it('should calculate the total for an order', function () {
        //Setup
        var order = "AAAABBBCCCCCD";

        //Test
        var total = checkout(order);

        //Assert
        // (1 * 130) + (1 * 50) = 180
        // (1 * 45) + (1 * 30)  = 75
        // 5 * 20               = 100
        // 1 * 15               = 15
        // TOTAL                = 370
        expect(total).to.equal(370);
    });

    it('should return -1 for an invalid order', function () {
        //Setup
        var order = "-";

        //Test
        var total = checkout(order);

        //Assert
        expect(total).to.equal(-1);
    });
});
