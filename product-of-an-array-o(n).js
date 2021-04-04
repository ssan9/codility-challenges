// O(n) solution of the product of array except self
Time Complexity: O(n). 
The array needs to be traversed two times, so the time complexity is O(n).
Space Complexity: O(n). 
One array to store the output is needed so the space complexity is O(n)

function solution(nums) {
  let arr = [];
  let product = 1;
  
  for (let i = 0; i < nums.length; i++) {
    arr[i] = product;
    product *= nums[i];
  }
    
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] *= product;
    product *= nums[i];
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5]));