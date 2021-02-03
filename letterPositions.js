
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = array1.length - 1; i > -1; i--) {
    if (!assertEqual(array1[i], array2[i])) {
      console.log("Assertion Failed: First Array ", array1, "=== Second Array ", array2)
    }
  }
  console.log("Assertion Passed: First Array ", array1, "!== Second Array ", array2)
}


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};


const testStr = "lighthouse in the house";
const testStr2 = "ddddfffjjooooo"

result1 = letterPositions(testStr2);
assertArraysEqual(result1["d"], [0, 1, 2, 3])
assertArraysEqual(result1["f"], [4, 5, 6])
assertArraysEqual(result1["j"], [7, 8])
assertArraysEqual(result1["o"], [9, 10, 11, 12, 13])



