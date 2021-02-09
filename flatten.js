const flatten = function (arr) {
  let newArr = [];
  for (i of arr) {
    if (Array.isArray(i)) {
      newArr.push(...flatten(i));
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
module.exports = flatten;
