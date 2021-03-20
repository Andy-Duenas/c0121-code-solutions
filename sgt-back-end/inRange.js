module.exports = function inRange(num) {
  if (parseInt(num) >= 0 && parseInt(num) <= 100) {
    return true;
  }
  return false;
};
