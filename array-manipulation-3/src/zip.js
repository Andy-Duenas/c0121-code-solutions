/* exported zip */

function zip(first, second) {
  const newArray = [];

  let length = 0;
  if (first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (let i = 0; i < length; i++) {
    const smallArray = [];
    smallArray.push(first[i]);
    smallArray.push(second[i]);
    newArray.push(smallArray);
  }

  return newArray;
}
