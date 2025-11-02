//Use reduce() to find the total of numbers [10, 20, 30, 40].
let number=[20,40,55,78,96];
let total=number.reduce(function(sum,num)
{return sum+num;
},0); 
console.log(total);  
