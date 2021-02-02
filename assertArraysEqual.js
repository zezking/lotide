

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};
// TEST CODE
const eqArrays = function (array1, array2) {
  input = [];
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = array1.length - 1; i > -1; i--) {
      if (assertEqual(array1[i], array2[i])) {
        console.log("Assertion Passed: First Array ", array1, "=== Second Array ", array2)
        break;
      } else {
        console.log("Assertion Failed: First Array ", array1, "!== Second Array ", array2)
        break;
      }
    }
  }
}

// Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
// 🍅🍅🍅Assertion Passed: 1 === 1

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"])// => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
