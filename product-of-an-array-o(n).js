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