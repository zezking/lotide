const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
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
}


const middle = function (arr) {

  const arrLength = arr.length;
  const midIndex = arr.length / 2;
  if (!Array.isArray(arr)) {
    console.log("Please enter an array")
  } else if (arrLength < 3) {
    console.log([]);
  } else if (!Number.isInteger(midIndex)) {
    console.log(arr.slice(Math.trunc(midIndex), Math.trunc(midIndex) + 1));
  } else {
    console.log(arr.slice(midIndex - 1, midIndex), arr.slice(midIndex, midIndex + 1))
  }
}





middle([1])// => []
middle([1, 2])// => []
middle([1, 2, 3])// => [2]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9]) // => [3]
