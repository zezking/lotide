const assertEqual = function (actual, expected) {
  // if (actual !== expected) {
  //   console.log(`🛑🛑🛑assertion Failed: ${actual} !== ${expected}`);
  // } else {
  //   console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  // }

  let ErrorMsg =
    actual !== expected
      ? `🛑🛑🛑assertion Failed: ${actual} !== ${expected}`
      : `✅✅✅Assertion Passed: ${actual} === ${expected}`;

  console.log(ErrorMsg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);
