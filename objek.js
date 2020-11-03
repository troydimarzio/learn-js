// objek prototype
function animals(name, age, food) {
    this.name = name;
    this.age = age;
    this.food = food;
}

let kucing = new animals("puspus", 2, ["fish", "bone"]);
let anjing = new animals("melky", 2, ["bone", "daging"]);
console.log(anjing.getData());

// cara deklarasi objek
let cat = {
    name: "puspus",
    age: 2,
    food: ["fish", "bone"],
    getData: function() {
        return this.name
    },
    setData: function(name) {
        this.name = name;
    }
}

cat.setData("tossy");
// console.log(cat.getData());

let dog = new Object();
dog.name = "melky";
dog.age = {2: "anak-anak", 5: "dewasa"};
dog.food = ["bone", "daging"];
dog.getData = function() {
    return this.name;
}
dog.setData = function(name) {
    this.name = name;
}

dog.setData("kelly");
// console.log(dog.getData());
// for(let i = 0; i < cat.food.length; i++) {
//     console.log(`Makanan kesukaan ${dog.name} yang berumur ${dog.age[2]} tahun adalah ${dog.food[i]}`);
// }