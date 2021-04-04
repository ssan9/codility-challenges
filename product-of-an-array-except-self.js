// Given an array nums[] of n integers, construct a Product Array prod[] (of same size) such that prod[i]
// is equal to the product of all the elements of arr[] except arr[i]. 
// Example : 

// Input: arr[]  = {10, 3, 5, 6, 2}
// Output: prod[]  = {180, 600, 360, 300, 900}
// 3 * 5 * 6 * 2 product of other array 
// elements except 10 is 180
// 10 * 5 * 6 * 2 product of other array 
// elements except 3 is 600
// 10 * 3 * 6 * 2 product of other array 
// elements except 5 is 360
// 10 * 3 * 5 * 2 product of other array 
// elements except 6 is 300
// 10 * 3 * 6 * 5 product of other array 
// elements except 2 is 900

Solution:
function solution(nums) {
    let prod = [];
    for (let i = 0; i < nums.length; i++) {
	    let products = 1;
	    for (let j = 0; j < nums.length; j++) {
	      if (i !== j) {
	        products *= nums[j];
	      }
	    }
    	prod.push(products);
  	}
    return arr;
}

console.log(solution([1, 2, 3, 4, 5]));

