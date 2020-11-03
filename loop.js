// for loop
const array = [10, 20, 30, 40, 50];
const object = {a:1, b:2, c:3};
let name = "troy";

console.log(object.hasOwnProperty('z'));


for(let i = 0; i < name.length; i++){
    // console,console.log(name[i]);
}

// for of loop >>>> recomended for array, map
for(let arr of array){
    // console.log(arr);
}

// for in loop >>> recomended for object, map
for(let prop in object){
    // console.log(object[prop]);
    // console.log(object.hasOwnProperty(prop));
}

let i = 0;
// while(i < array.length){
//     console.log(array[i]);
//     i++;
// }

// do{
//     console.log(array[0]);
// }while(i > array.length)