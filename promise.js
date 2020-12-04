/* 
 * fetch -> ambil api
 * promise -> 
 */

// fetch api
fetch("https://reqres.in/api/users")
    .then(result => result.json())
    .then(data => console.log(data));