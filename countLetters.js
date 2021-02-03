const failed = "Assertion Failed: ";
const passed = "Assertion Passed: ";
const notEqual = " !== ";
const equal = " === "

const assertEqual = function (actual, expected) {

  if (actual !== expected) {

    console.log(`${failed}${actual}${notEqual}${expected}`);

  } else {

    console.log(`${passed}${actual}${equal}${expected}`);
  }
}

const countLetters = function (str) {

  let result = {}
  for (c of str) {
    if (c !== ' ') {
      if (result[c]) {
        result[c]++
      } else {
        result[c] = 1;
      }
    }
  }
  return result;
}

const testStr = "lighthouse in the house";
console.log(countLetters(testStr))