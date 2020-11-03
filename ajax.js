let xhr = new XMLHttpRequest();


// xhr.addEventListener("load", function(){
// 	if(this.readyState == 4 && this.status == 200){
// 		console.log(this.responseText);
// 	}
// });

// let data = {
// 	"name": "troy mokoagow",
// 	"job": "developer"
// }

xhr.open("POST", "https://reqres.in/api/users");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("name=Muhamad Nauval Azhar&job=Back-end Developer");

xhr.addEventListener("load", function(){
	if(this.readyState == 4 && this.status == 201){
		console.log(this.responseText);
	}
});

// xhr.open("GET", "https://reqres.in/api/users");
// xhr.send();