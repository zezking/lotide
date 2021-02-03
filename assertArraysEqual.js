
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};

// TEST CODE
const assertArraysEqual = function (array1, array2) {
  input = [];
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = array1.length - 1; i > -1; i--) {
    if (!assertEqual(array1[i], array2[i])) {
      console.log("Assertion Passed: First Array ", array1, "=== Second Array ", array2)
    }
  }
  console.log("Assertion Failed: First Array ", array1, "!== Second Array ", array2)
}

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])// => true
assertArraysEqual(["1", "2", "3"], ["1", 2, "3"]) // => false


assertEqual(3, 4);