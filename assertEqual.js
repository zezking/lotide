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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
