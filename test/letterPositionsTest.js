const letterPositions = require("../letterPositions");
const assert = require("chai").assert;
const TestStr = "ddddfffjjooooo";
describe("#LetterPositions", () => {
  it("should [0, 1, 2, 3]return if ask for D positions ", () => {
    const actual = letterPositions(TestStr);
    const expected = [0, 1, 2, 3];
    assert.deepEqual(actual["d"], expected);
  });
});
describe("#LetterPositions", () => {
  it("should [7, 8]return if ask for j positions ", () => {
    const actual = letterPositions(TestStr);
    const expected = [7, 8];
    assert.deepEqual(actual["j"], expected);
  });
});
describe("#LetterPositions", () => {
  it("should [4, 5, 6]return if ask for f positions ", () => {
    const actual = letterPositions(TestStr);
    const expected = [4, 5, 6];
    assert.deepEqual(actual["f"], expected);
  });
});
describe("#LetterPositions", () => {
  it("should [9, 10, 11, 12, 13]return if ask for o positions ", () => {
    const actual = letterPositions(TestStr);
    const expected = [9, 10, 11, 12, 13];
    assert.deepEqual(actual["o"], expected);
  });
});
