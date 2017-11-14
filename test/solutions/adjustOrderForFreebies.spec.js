var adjustOrderForFreebies = require('../../lib/solutions/adjust-order-for-freebies');
var expect = require('chai').expect;
var _ = require('lodash');

describe('adjust-order-for-freebies', function () {

    it('should deduct any freebies from the order', function () {

        var order = [
            {
                item: 'B',
                qty: 5
            },
            {
                item: 'E',
                qty: 2
            }
        ];

        //Test
        var adjustedOrder = adjustOrderForFreebies(order);

        //Assert
        expect(order[0].qty).to.equal(4);
        expect(order[1].qty).to.equal(2);
    });

    it('should handle multiple freebies', function () {

        var order = [
            {
                item: 'B',
                qty: 5
            },
            {
                item: 'E',
                qty: 8
            }
        ];

        //Test
        var adjustedOrder = adjustOrderForFreebies(order);

        //Assert
        expect(order[0].qty).to.equal(1);
        expect(order[1].qty).to.equal(8);
    });

});
