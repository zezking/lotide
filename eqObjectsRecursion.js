const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(object1);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (i in object1) {
    if (typeof object1[i] === "object" && typeof object2[i] === "object") {
      console.log("I am here");
      const result = eqObjects(object1[i], object2[i]);
      if (!result) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};

let result1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
let result3 = eqObjects({ a: 1 }, { a: 2 }); // => true
// let result2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); //false
// let result4 = eqObjects({ a: { y: 0 }, b: 2 }, { b: 2, a: { y: 0 } }); //false
// let result4 = eqObjects(
//   { a: { y: 0, c: 2, d: { f: 1, d: 2 } }, b: 2 },
//   { b: 2, a: { y: 0, c: 2, d: { f: 1, d: 2 } } } //true;
// );

console.log(result1); // => true
// console.log(result2); // => true
console.log(result3); // => true
// console.log(result4); // => true
