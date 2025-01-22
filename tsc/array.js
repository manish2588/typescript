var arr = [1, 2, 3];
console.log(arr);
var arr1 = [1, 2, 3];
console.log(arr);
var arr2 = [1, 2, 3, 44, 5, 6, 7, 88, 9, 15];
var newAry = arr2.reduce(function (acc, value) { return Math.max(acc, value); }, 0);
console.log(newAry);
