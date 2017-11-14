var calcOrderTotal = require('../../lib/solutions/calc-order-total');
var expect = require('chai').expect;

describe('calc-order-total', function () {

    it('should add up the orderItem subtotals to return a total', function () {

        var orderItems = [
            {
                item: 'A',
                qty: 9
            },
            {
                item: 'B',
                qty: 3
            }
        ];

        //Test
        var total = calcOrderTotal(orderItems);

        //Assert
        // (1 * 200) + (1 * 130) + (1 * 50) = 380
        // (1 * 45) + (1 * 30)              = 75
        // TOTAL                            = 455
        expect(total).to.equal(455);
    });


    it('should adjust the order total to take into account freebies', function () {

        var orderItems = [
            {
                item: 'B',
                qty: 3
            },
            {
                item: 'E',
                qty: 2
            }
        ];

        //Test
        var total = calcOrderTotal(orderItems);

        //Assert
        //1 * 45 = 45
        //2 * 40 = 80
        //TOTAL  = 125
        expect(total).to.equal(125);
    });

    it('should adjust the order for same-item-freebies', function () {

        var orderItems = [
            {
                item: 'F',
                qty: 3
            }
        ];

        //Test
        var total = calcOrderTotal(orderItems);

        //Assert
        //2 * 10 = 20
        expect(total).to.equal(20);
    });

});