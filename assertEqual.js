const assertEqual = function (actual, expected) {
  let errorMsg =
    actual !== expected
      ? `🛑🛑🛑assertion Failed: ${actual} !== ${expected}`
      : `✅✅✅Assertion Passed: ${actual} === ${expected}`;

  console.log(errorMsg);
};

module.exports = assertEqual;
