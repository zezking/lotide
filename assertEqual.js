const assertEqual = function (actual, expected) {
  let errorMsg =
    actual !== expected
      ? `🛑🛑🛑assertion Failed: ${actual} !== ${expected}`
      : `✅✅✅Assertion Passed: ${actual} === ${expected}`;

  return errorMsg;
};

module.exports = assertEqual;
