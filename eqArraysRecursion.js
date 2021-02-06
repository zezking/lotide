const assertEqual = function (actual, expected) {
  return actual !== expected ? false : true;
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      let result = eqArrays(array1[i], array2[i]);
      if (!result) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
console.loge(
  eqArrays([
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ],
  ])
);
