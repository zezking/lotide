const assert = require("chai").assert;
const flatten = require("../flatten");

describe("flatten", () => {
  it("[1, 2, [3, 4], 5, [6]] will be [1,2,3,4,5,6]", () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];

    assert.deepEqual(actual, expected);
  });
});
