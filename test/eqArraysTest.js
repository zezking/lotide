const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#equal Arrays", () => {
  it("should return true if compare [1, 2, 3] and [1, 2, 3]", () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});
describe("#equal Arrays", () => {
  it("should return true if compare [1, 2, 3] and [3, 2, 1]", () => {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
describe("#equal Arrays", () => {
  it(`should return true if compare ["1", "2", "3"] and ["1", "2", "3"]`, () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});
describe("#equal Arrays", () => {
  it(`should return true if compare ["1", 2, 3] and ["1", "2", 3]`, () => {
    const actual = eqArrays(["1", 2, 3], ["1", "2", 3]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
