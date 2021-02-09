const flatten = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = flatten;
