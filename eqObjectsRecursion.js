const failed = "Assertion Failed: ";
const passed = "Assertion Passed: ";
const quote = '"';
const notEqual = " !== ";
const equal = " === ";
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    if (typeof actual === "string") {
      console.log(
        `🛑🛑🛑${failed}${quote}${actual}${quote}${notEqual}${quote}${expected}${quote}`
      );
    } else if (typeof actual === "number") {
      console.log(`🛑🛑🛑${failed}${actual}${notEqual}${expected}`);
    }
  } else {
    if (typeof actual === "string") {
      console.log(
        `✅✅✅${passed}${quote}${actual}${quote}${equal}${quote}${expected}${quote}`
      );
    } else if (typeof actual === "number") {
      console.log(`✅✅✅${passed}${actual}${equal}${expected}`);
    }
  }
};
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
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (i in object1) {
    if (!Array.isArray(object1[i]) && !Array.isArray(object2[i])) {
      eqObjects(object1[i], object2[i]);
    }
    if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
};

let result1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
let result2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); //false
let result3 = eqObjects({ a: { y: 0 }, b: 2 }, { a: 1, b: 2 }); //false
let result4 = eqObjects(
  { a: { y: 0, c: 2, d: { f: 1, d: 2 } }, b: 2 },
  { b: 2, a: { y: 0, c: 2, d: { f: 1, d: 2 } } } //true;
); //false

console.log(result1); // => true
console.log(result2); // => true
console.log(result3); // => true
console.log(result4); // => true
