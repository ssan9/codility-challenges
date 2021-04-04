// Find largest positive and negative numbers in an array

function solution(nums) {
  let p = nums[0];
  let n = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > p) {
      p = nums[i];
    }
    if (nums[i] < n) {
      n = nums[i];
    }
  }
  return `${p}, ${n}`;
}

// OR

function solution(nums) {
  const ascendingArray = nums.sort((a, b) => a - b);
  return `${ascendingArray[0]}, ${ascendingArray[ascendingArray.length - 1]}`;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, -3, 2, 3, 6, -1]));
console.log(solution([4, 8, 9, -4, 1, -1, -8, -9]));
