var assert = require("chai").assert;
var maxProfit = require("../stockMarket");

describe("Profit", function() {
  it("should return 16 for array = [45, 24, 35, 31, 40, 38, 11]", function() {
    var array = [45, 24, 35, 31, 40, 38, 11];
    assert.isTrue(maxProfit(array, []) === 16);
  });
  it("should return 16 for array = [11, 24, 35, 31, 40, 38, 45]", function() {
    var array = [11, 24, 35, 31, 40, 38, 45];
    assert.isTrue(maxProfit(array, []) === 34);
  });

});
