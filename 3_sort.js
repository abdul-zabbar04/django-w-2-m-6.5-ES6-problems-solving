const a=[1,2,5,4,3,6,7,8,9,10,11,17,13,14,15,16, 12,18,19,20]
a.sort(function(a,b){return a-b})
console.log(`Ascending order: ${a}`);
a.sort(function(a,b){return b-a})
console.log(`Descending order: ${a}`);