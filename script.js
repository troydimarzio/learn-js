/* 
   General program concepts in javascript
*/

// hoisting
function example() {
	var a;
	console.log(a);
	a = true;
	// result = undefined
}

// example();

// let x = 10
// while(x > 0) {
// 	console.log(x)
// 	x--
// }
// console.log(x)

const array = [1, 2, 3, 4 ,5];
for (let i = 0; i < array.length; i++) {
	const element = array[i];
	console.log(element);
}
