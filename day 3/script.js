// 1- Function to calculate the sum of all numbers in the array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 2- Function to convert all strings in the array to uppercase
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}

// 3- Function to find the largest number in the array
function findLargest(arr) {
    return Math.max(...arr);
}

// 4- Function to find the smallest number in the array
function findSmallest(arr) {
    return Math.min(...arr);
}

// 5- Function to calculate the average of all numbers in the array
function averageArray(arr) {
    return arr.length ? sumArray(arr) / arr.length : 0;
}

// 6- Function to calculate the sum of all even numbers in the array
function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

// 7- Function to find the second largest number in the array
function secondLargest(arr) {
    let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

// 8- Function to rearrange the array so that odd values come first,
// followed by even values, while preserving the original order of each group
function rearrangeArray(arr) {
    let odds = arr.filter(num => num % 2 !== 0);
    let evens = arr.filter(num => num % 2 === 0);
    return [...odds, ...evens];
}