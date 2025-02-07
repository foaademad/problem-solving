// 1-Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }
// 2- Create a function that takes an array and a string as arguments and returns the index of the string.
function findIndex(arr, str) {
    let index = arr.indexOf(str);
    return index;

}
console.log( findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// 3- Create a function that takes an array and returns the types of values (data types) in a new array.
function getTypes(arr) {
    let types = [];
    for(let i = 0; i < arr.length; i++) {
      types.push(typeof arr[i]);
    }
    return types;
}
console.log(getTypes([1, "apple", true, {name: "John"}, [1, 2, 3]]));
// 4-Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
	let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(getSumOfItems([1, 2, 3, 4, 5]));
// 5- Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}










