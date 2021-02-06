// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  return actual !== expected ? false : true;
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!assertEqual(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (i of keys1) {
    if (Array.isArray(object1[i]) || Array.isArray(object2[i])) {
      if (eqArrays(object1[i], object2[i])) {
        return true;
      }
      return false;
    }
    if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(
      "✅✅✅ Assertion Passed: " +
        `${inspect(actual)}` +
        " === " +
        `${inspect(expected)}`
    );
  } else {
    console.log(
      "🛑🛑🛑 Assertion Failed: " +
        `${inspect(actual)}` +
        " === " +
        `${inspect(expected)}`
    );
  }
};

testObj1 = {
  a: 1,
  b: 3,
  d: 4,
  c: 2,
};

testObj2 = {
  a: 1,
  c: 3,
  b: 2,
};

testObj3 = {
  a: 1,
  b: 3,
  c: 2,
  d: 4,
};

assertObjectsEqual(testObj1, testObj3);
