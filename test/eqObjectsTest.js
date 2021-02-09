const eqObjects = require("../eqObjects");
const assert = require("chai").assert;
const a = { b: "2", a: 1 };
const b = { a: "1", b: "2", c: "3" };
const c = { d: "1", c: ["2", 3] };
const d = { c: ["2", 3], b: [2, 3, 4, "5"], d: [1, 2] };
const c1 = { c: ["2", 3], d: "1" };

describe("#findKeyByValue", () => {
  it('should return false if compare { b: "2", a: 1 } and { a: "1", b: "2", c: "3" }', () => {
    const actual = eqObjects(a, b);
    const expected = false;
    assert.deepEqual(actual, expected);
  });
});
describe("#findKeyByValue", () => {
  it('should return false if compare {{ d: "1", c: ["2", 3] }; and { c: ["2", 3], b: [2, 3, 4, "5"], d: [1, 2] }', () => {
    const actual = eqObjects(c, d);
    const expected = false;
    assert.deepEqual(actual, expected);
  });
});
describe("#findKeyByValue", () => {
  it('should return false if compare c = { d: "1", c: ["2", 3] };; and { c: ["2", 3], d: "1" }', () => {
    const actual = eqObjects(c, c1);
    const expected = true;
    assert.deepEqual(actual, expected);
  });
});
