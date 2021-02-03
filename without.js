



const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function (array1, array2) {
  for (let i = array1.length - 1; i > -1; i--) {
    if (!assertEqual(array1[i], array2[i]) || (array1.length !== array2.length)) {
      console.log("Assertion Failed: First Array ", array1, "!== Second Array ", array2)
      break;
    } else {
      console.log("Assertion Passed: First Array ", array1, "=== Second Array ", array2)
      break;
    }
  }
}

console.log(without([1, 2, 3], [1]))// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]);


assertArraysEqual(words, ["hello", "world", "lighthouse"]);