/* prototype Object

* Object Literal
* Object function declaration
* Object constructor (new keyword)
* object.create()

*/

/* ======================== Object Lietal ==============================

* object punya property dan method
* property : value
* method : function
* di dalam object ada keyword this yg mana mengacu pada object tersebut.
* string literal > standar ES6

====================================================================== */

let mahasiswa = {
    nama: "troy",
    umur: 22,
    menyapa: function(teman){
        return `halo, ${this.nama}. Umur kamu ${this.umur} ya? Kenalan yuk dengan ${teman}!`;
    }
};

/* ======================== Object function ==============================

* hanya membuat satu kali blueprint / template dan dapat dipanggil beruang kali
* menggunakan deklarasi object dan return objectnya di dalam function

====================================================================== */

// function Keluarga(nama, marga){
//     let keluarga = {};
//     keluarga.nama = nama;
//     keluarga.marga = marga;
//     keluarga.fullname = function(){
//         return `halo ${this.nama} ${this.marga}`;
//     }

//     return keluarga;
// }

// let troy = Keluarga('troy', 'mokoagow');
// let alvin = Keluarga('alvin', 'mokoagow');

/* ======================== Object constructor ==============================

* menggunakan keyword new
* tidak perlu lagi mendeklarasikan object dan menggunakan return
* ganti dengan this

====================================================================== */

// function Keluarga(nama, marga){
//     this.nama = nama;
//     this.marga = marga;
//     this.fullname = function(){
//         return `halo ${this.nama} ${this.marga}`;
//     }
// }

// let drifan = new Keluarga("drifan", "mokoagow");

/* ======================== Object.create() ==============================

* sama seperti mendeklarasikan objek
* hanya saja objek.create() ada parapeternya
* sama seperti konsep inheritance

====================================================================== */

const keluargaParent = {
    fullname: function(){
        return `halo ${this.nama} ${this.marga}`;
    }
};

function Keluarga(nama, marga){
    let keluarga = Object.create(keluargaParent);
    keluarga.nama = nama;
    keluarga.marga = marga;

    return keluarga;
}

let kel = Keluarga("Nyasia", "Langworth");

/* ======================== Konsep prototype ==============================

* prototype secara tidak langsung dibuatkan oleh javascript
* setiap array, objek, number mapupun class2 yg lain punya prototype

====================================================================== */

function Keluarga(nama, marga){
    // let this = Object.create(this.prototype);
    this.nama = nama;
    this.marga = marga;

    // return this;
}

Keluarga.prototype.fullname = function(){
    return `halo ${this.nama}`;
}

let kel1 = new Keluarga("Johnathon", "Bednar");

/* ======================== Arrow Function ==============================

* function expression yg lebih singkat

====================================================================== */

const fullName = (firstName, lastName) => {
    return `halo ${firstName} ${lastName}`;
}

/* ======================== High Order Function -> reduce, filter, map ==============================

* high order function -> function yg di dalamnya ada function lain sebagai parameter atau return function
                      -> function sebagai argumen/parameter disebut callback -> anonymous function
                      -> function yg memiliki callback disebut high order function
* filter -> memfilter elemen di dalam array
* map -> memetakan elemen array ke dalam array baru
* reduce -> menjumlahkan semua elemen array

====================================================================== */
// for biasa
let angka = [4, 0, 10, 2, 3];
let arr = [];
for(let i = 0; i < angka.length; i++){
    if(angka[i] >= 3){
        arr.push(angka[i]);
    }
}

//filter
const newAngka1 = angka.filter(function(curr){
    return curr >= 3;
});
// map
const map = angka.map(function(curr){
    return curr * 2;
});
// reduce
const reduce = angka.reduce(function(prev, curr){
    return prev + curr;
});
// method chaining -> menyederhanakan penulisan method prototype HOF
const newAngka = angka.filter(curr => curr > 2)
    .map(curr => curr * 2)
    .reduce((prev, curr) => prev + curr);

/* ======================== closures, lexical scope ==============================

* closure -> inner function yg bisa akses variabel maupun argumen yg ada di dalam function nya maupun di luar functionnya sekalipun pada global scope
* lexical scope ->
====================================================================== */
// let var1 = "helo1";

// function outerFunction(param1){
//     let var2 = "helo2";

//     function innerFunction(param2){
//         let var3 = "helo3";

//         function gokil(){
//             // console.log(var1);
//             // console.log(var2);
//             // console.log(var3);
//             // console.log(param1);
//             // console.log(param2);
//         }
//         gokil();
//     }

//     innerFunction("param 2");
// }

// outerFunction("param 1")

/* ======================== IIFE ==============================
* function anomymous yg langsung di invoke
====================================================================== */

// (function(nama){
//     console.log(nama);
// })("troy");

/* ======================== Destructuring ==============================
* destructuring -> mengextract isi dari array atau object ke dalam variabel baru 
====================================================================== */

// const num = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = num;

// let a = 1, b = 2;
// [b,a] = [a,b];

// let obj = {
//     nama: "troy",
//     umur: 22
// }

// function iniFunction({nama, umur}){
//     return nama + ", " + umur;
// }

// console.log(iniFunction(obj));

// let {nama, umur} = obj;

// function iniFunction(){
//     return [1, 2,3];
// }

// let [a, b, c] = iniFunction();


// destructuring function

// function kalkulasi(a, b){
//     return [a+b, a-b, a*b];
// }

// const [tambah, kurang, kali, bagi = "default"] = kalkulasi(1,2);

const obj = {
    nama: "troy",
    umur: 22,
    fullname: function(){
        return `hi ${nama}?`;
    }
}

function people({nama}){
    return nama;
}

/* ======================== Spread Operator ==============================
* meng unpack isi array
* mencopy isi array
* menggabungkan array / concat
====================================================================== */

const array = [1, 2, 3];

const ar = [...array];

/* ======================== Rest Parameter ==============================
* bisa menagkap banyak argumen pada function menjadi sebuah array
====================================================================== */

const iniVar = new Array(1, 2, 3);
const v = 5;
function iniFunction(v, a){
    return [v, ...a];
}


console.log(iniFunction(v, iniVar));


// console.log(typeof []);
// console.log(typeof {});