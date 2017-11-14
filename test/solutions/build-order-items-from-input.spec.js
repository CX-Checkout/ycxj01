var buildOrderItemFromInput = require('../../lib/solutions/build-order-items-from-input');
var expect = require('chai').expect;
var _ = require('lodash');

describe.only('split-sku-input', function () {

    it('should return an empty order for an empty string', function () {

        var input = "";
        var result = buildOrderItemFromInput(input);
        expect(result).to.deep.equal([]);
    });

    it('should build order items from the sku input string', function () {

        //Setup
        var input = "ABCD";

        //Test
        var result = buildOrderItemFromInput(input);

        //Assert
        expect(result).to.have.lengthOf(4);

        var A = _.find(result, { item: 'A'});
        expect(A.qty).to.equal(1);
        expect(A.item).to.equal('A');
        var B = _.find(result, { item: 'B'});
        expect(B.qty).to.equal(1);
        expect(B.item).to.equal('B');
        var C = _.find(result, { item: 'C'});
        expect(C.qty).to.equal(1);
        expect(C.item).to.equal('C');
        var D = _.find(result, { item: 'D'});
        expect(D.qty).to.equal(1);
        expect(D.item).to.equal('D');

    });

    it('should count up the number of items of each type', function () {

        //Setup
        var input = "ABBCCCDDDD";

        //Test
        var result = buildOrderItemFromInput(input);

        //Assert
        expect(result).to.have.lengthOf(4);

        var A = _.find(result, { item: 'A'});
        expect(A.qty).to.equal(1);
        expect(A.item).to.equal('A');
        var B = _.find(result, { item: 'B'});
        expect(B.qty).to.equal(2);
        expect(B.item).to.equal('B');
        var C = _.find(result, { item: 'C'});
        expect(C.qty).to.equal(3);
        expect(C.item).to.equal('C');
        var D = _.find(result, { item: 'D'});
        expect(D.qty).to.equal(4);
        expect(D.item).to.equal('D');
    });

    it('should handle mixed up orders', function () {

        //Setup
        var input = "ABABABAB";

        //Test
        var result = buildOrderItemFromInput(input);

        //Assert
        expect(result).to.have.lengthOf(2);

        var A = _.find(result, { item: 'A'});
        expect(A.qty).to.equal(4);
        expect(A.item).to.equal('A');
        var B = _.find(result, { item: 'B'});
        expect(B.qty).to.equal(4);
        expect(B.item).to.equal('B');
    });

    it('should handle unknown product names by return -1 as an incorrect order', function () {
       //Setup
        var input = "AA-BB";

        //Test
        var result = buildOrderItemFromInput(input);

        //Assert
        expect(result).to.equal(-1);
    });
});
