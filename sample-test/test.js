let assert = require('chai').assert;

const smallestPositiveMissing = require('./smallestPositiveMissing');

describe("Mocha", function () {
    it("checking if mocha works", function(){
        assert.equal(true, true)
    })
})

describe("Smallest Missing Positive function", function() {
    context("function, when given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.", function() {
        it("[1, 3, 6, 4, 1, 2] returns 5", function() {
            assert.equal(smallestPositiveMissing([1, 3, 6, 4, 1, 2]), 5)
        })
    })
})