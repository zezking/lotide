const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;
const testObj = {
  a: "1",
  b: "2",
  c: "3",
  d: "5",
  e: "6",
};

describe("#findKeyByValue", () => {
  it('should return "b" if ask for key with value of 2 ', () => {
    const actual = findKeyByValue(testObj, 2);
    const expected = "b";
    assert.strictEqual(actual, expected);
  });
});

describe("#findKeyByValue", () => {
  it('should return "c" if ask for key with value of 3 ', () => {
    const actual = findKeyByValue(testObj, 3);
    const expected = "c";
    assert.strictEqual(actual, expected);
  });
});
describe("#findKeyByValue", () => {
  it('should return "b" if ask for key with value of 4 ', () => {
    const actual = findKeyByValue(testObj, 5);
    const expected = "d";
    assert.strictEqual(actual, expected);
  });
});

describe("#findKeyByValue", () => {
  it('should return "e" if ask for key with value of 6 ', () => {
    const actual = findKeyByValue(testObj, 6);
    const expected = "e";
    assert.strictEqual(actual, expected);
  });
});

describe("#findKeyByValue", () => {
  it("should return undefined if ask for key with value of 7 ", () => {
    const actual = findKeyByValue(testObj, 7);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});

// assertEqual(findKeyByValue(testObj, 7), undefined);
