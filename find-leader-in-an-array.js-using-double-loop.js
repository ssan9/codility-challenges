function solution(arr) {
    
  let obj = {};
    
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        count++;
        obj[arr[i]] = count;
      }
    }
    
  }
  let average = arr.length / 2;
  const max = Object.keys(obj).reduce(num => obj[num] > average ? 1 : -1 );
  return +max;
}

console.log(Solution([2,2,2,2,2,3,4,4,4,6]));
console.log(Solution([1,1,1,50]));

