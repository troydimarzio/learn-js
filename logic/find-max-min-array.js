/*
linked list: single and double linked list
*/

// find max and min from array

const array = [3, 5, 1, 6, 10];

// menggunakan fungsi sort()
function sortMaxMin(){
	array.sort() // Default is lexicographical sort
	console.log(array.join(", ")) // -15, -37, -5, 15, 37, 5

	array.sort((b,a) => a-b) // Sort numerically, ascending
	console.log(array.join(", ")) // -37, -15, -5, 5, 15, 37

	const min = array[0]
	const max = array[array.length-1]
	console.log(`Minimum: ${min}, Maximum: ${max}`)
}

// menggunakan for loop + arrow function
// [3, 5, 1, 6, 10]
const forLoopMaxMin = () => {
	let max = array[0], min = array[0];
	let value;
	for(let i = 1; i < array.length; i++){
		value = array[i];
		max = (value > max)? value: max;
		min = (value < min)? value: min;
	}
	return `max: ${max}, min: ${min}`;
}

// console.log(sortMaxMin());
console.log(forLoopMaxMin());
