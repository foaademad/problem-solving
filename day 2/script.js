// 1- Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
	return (base*height)/2
} 
console.log(triArea(2, 3));
// 2-Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
	return num + 1;
}
addition(1)
// 3-Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    return minutes * 60;
	
}
// 4-Create a function that takes length and width and finds the perimeter of a rectangle.
function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}
console.log(rectanglePerimeter(4, 5));
// 5-You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
    return (2 * twoPointers) + (3 * threePointers);
}
console.log(points(2, 3));



