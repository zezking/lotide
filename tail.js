const tail = function (s) {
  if (s.length === 0 || s.length === 1) {
    s = [];
  } else {
    s = s.slice(1);
  }
  return s;
};
module.exports = tail;
