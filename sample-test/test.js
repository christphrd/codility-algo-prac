let assert = require('chai').assert;

const smallestPositiveMissing = require('./smallestPositiveMissing');

describe("Mocha & Chai", function () {
    it("checking if mocha & chai works", function(){
        assert.equal(true, true)
    })
})

describe("Smallest Missing Positive function", function() {
    context("function, when given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.", function() {
        it("A = [1, 3, 6, 4, 1, 2] returns 5", function() {
            assert.equal(smallestPositiveMissing([1, 3, 6, 4, 1, 2]), 5)
        });

        it("A = [1, 2, 3] returns 4", function() {
            assert.equal(smallestPositiveMissing([1, 2, 3]), 4)
        });

        it("A = [-1, -3] returns 1", function() {
            assert.equal(smallestPositiveMissing([-1, -3]), 1)
        })
    })
})