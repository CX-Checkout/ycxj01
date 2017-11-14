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

        //---------------------------------

        //Setup
        var order = {
            item: 'A',
            qty: 9
        }

        //Test
        var result = calc(order);
        
        //Assert
        // (1 * 200) + (1 * 130) + (1 * 50) = 380
        expect(result).to.equal(380);

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


