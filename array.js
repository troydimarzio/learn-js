// array dan manipulasi array
let arr = [];
arr.push("troy", "apin", "ipang", "doni", "jodi"); // add from last
arr.pop(); // jodi delete from last
arr.shift(); // troy delete from front
arr.unshift("troy"); // troy add from front
arr.splice(2, 0, "lani"); // add and remove element in the midlle
let arr2 = arr.slice(3, 4); // memotong element array

for (let i = 0; i < arr.length; i++) {
	console.log(`halo: ${i} nama = ${arr[i]}`);
}

// console.log(arr);