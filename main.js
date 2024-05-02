function leastLarger(array, index) {
  const valueToCompare = array[index];
  const largerValues = array.filter((value) => value > valueToCompare);
  if (!largerValues.length) {
    return -1;
  }
  const sortedLargerValues = largerValues.sort((a, b) => a - b);
  return array.indexOf(sortedLargerValues[0]);
}

const testArray = [4, 1, 3, 5, 6];
const testArray2 = [1, 3, 5, 2, 4];
const randomTest = [2, 60, 43, 9, -1];

console.log(leastLarger(randomTest, 0));