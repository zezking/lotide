const assertEqual = function (actual, expected) {
  let errorMsg =
    actual !== expected
      ? `🛑🛑🛑assertion Failed: ${actual} !== ${expected}`
      : `✅✅✅Assertion Passed: ${actual} === ${expected}`;

  console.log(errorMsg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);
