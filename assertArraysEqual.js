// TEST CODE
const assertArraysEqual = function (array1, array2) {
  input = [];
  if (array1.length !== array2.length) {
    console.log(
      "🛑🛑🛑Assertion Failed: First Array ",
      array1,
      "!== Second Array ",
      array2
    );
    return false;
  } else {
    for (let i = array1.length - 1; i > -1; i--) {
      if (array1[i] !== array2[i]) {
        console.log(
          "🛑🛑🛑Assertion Failed: First Array ",
          array1,
          "!== Second Array ",
          array2
        );
        return false;
      } else {
        console.log(
          "✅✅✅Assertion Passed: First Array ",
          array1,
          "=== Second Array ",
          array2
        );
        return true;
      }
    }
  }
};

module.exports = assertArraysEqual;
