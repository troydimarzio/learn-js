let objek = {nama: "troy", alamat: "kota"};
let array = [1, 2, 3, 4 ,5];

let objekConcat = {...objek,umur: 21};
let arrayConcat = [...array,6];

const arrFunc = (...a) => {
	return objek;
};




// console.log(objekConcat);
// console.log(arrayConcat);
//console.log(arrFunc(objek));

// var myArray = [];

// for (let i=10; i>5; i--){
//     myArray.push(i);
// }

// console.log(myArray);

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
