var checkout = require('../../lib/solutions/split-sku-input');
var expect = require('chai').expect;

describe('split-sku-input', function () {
    it('should split the quantity from the item name for each sku', function () {

        //Setup
        var input = "1A,2B,3C,4D";

        //Test
        var result = splitSkuInput(input, ",");

        //Assert
        expect(result).to.have.lengthOf(4);
        expect(result[0].qty).to.equal(1);
        expect(result[0].item).to.equal('A');
        expect(result[1].qty).to.equal(2);
        expect(result[1].item).to.equal('B');
        expect(result[2].qty).to.equal(3);
        expect(result[2].item).to.equal('C');
        expect(result[3].qty).to.equal(4);
        expect(result[3].item).to.equal('D');

    });

    it('should substitue an absence of a quantity with quantity 1', function () {

        //Setup
        var input = "A,2B,C,4D";

        //Test
        var result = splitSkuInput(input, ",");

        //Assert
        expect(result).to.have.lengthOf(4);
        expect(result[0].qty).to.equal(1);
        expect(result[0].item).to.equal('A');
        expect(result[1].qty).to.equal(2);
        expect(result[1].item).to.equal('B');
        expect(result[2].qty).to.equal(1);
        expect(result[2].item).to.equal('C');
        expect(result[3].qty).to.equal(4);
        expect(result[3].item).to.equal('D');

    });

    it('should handle -', function () {
       //Setup
        var input = "-";

        //Test
        var result = splitSkuInput(input, ",");

        //Assert
        expect(result).to.have.lengthOf(1);
        expect(result[0].qty).to.equal(1);
        expect(result[0].item).to.equal('-');
    });
});
