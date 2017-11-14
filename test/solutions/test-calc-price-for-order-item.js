var calc = require('../../lib/solutions/calc-price-for-order-item');
var expect = require('chai').expect;

describe('calc-price-for-order-item', function () {
    it('should calculate the price using any bargains first', function () {

        // Setup
        var order = {
            item: 'D',
            qty: 10
        }

        // Test
        var total = calc(order);

        // 10 * 15
        expect(total).to.equal(150);

        //--------------------------------

        // Setup
        var order = {
            item: 'A',
            qty: 10
        }

        // Test
        var total = calc(order);

        // (3 * 130) + (1 * 50) = 440
        expect(total).to.equal(440);
    });

    it('should return 0 if it doesn\'t recognise the product', function () {

        var order = {
            item: 'a',
            qty: 10
        }

        // Test
        var total = calc(order);

        // Assert
        expect(total).to.equal(0);

    });

    it('should return 0 for -', function () {

        var order = {
            item: '-',
            qty: 10
        }

        // Test
        var total = calc(order);

        // Assert
        expect(total).to.equal(0);
    });
});


