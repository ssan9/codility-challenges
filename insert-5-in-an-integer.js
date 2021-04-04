function solution(num) {
  let n = num.toString().split('');
  
  let arr = [];
  
  for (let i = 0; i < n.length; i++) {
    if (num < 0 && n[1] > 5) {
       n.shift("-");
       n.unshift("-5");
       n.join('');
       return n.join('');
    }
    if (num < 0 && n[1] < 5) {
       n.splice(2, 0, "5");
       n.join('');
       return n.join('');
    }
    if (n[i] > 5) {
      arr.push(n[i]);
    }
    if (n[i] <= 5 ) {
      arr.push(5);
      arr.push(n[i]);
    }
  }
  if (arr[arr.length - 1] > 5) {
      arr.push("5");
    }

 return arr.join('');
}


console.log(solution(-493));
console.log(solution(76));
console.log(solution(93));
console.log(solution(-93));

