var numbers=[1,2,3,4,5];
var sum = 0;
 for(var i=0;i<numbers.length;i++){
   
    sum += numbers[i];
 }
"------"
numbers.reduce(function(sum,number){
  return sum + number;
}, 0);
console.log(sum);