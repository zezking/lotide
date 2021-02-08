const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns '2' for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns '[5]' for [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });
});
