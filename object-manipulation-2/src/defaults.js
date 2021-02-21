/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (key === target[key] || target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
