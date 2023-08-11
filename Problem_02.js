function findMaxNumber(numArray) {
  if (numArray.length == 0) {
    return null;
  } else {
    const n = numArray.length;
    let max = 0;
    for (i = 0; i < n; i++) {
      if (numArray[i] > max) {
        max = numArray[i];
      }
    }
    return max;
  }
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); //Output: 15
