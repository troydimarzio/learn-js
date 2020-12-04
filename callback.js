/* 
* Callbacks
* Asynchronous
*/

// console.log('mulai');
const table = document.getElementById('table');

function requestData(metode, url){

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const result = JSON.parse(this.responseText);
            const users = result.data;

            users.forEach(user => {
            const data = `<tr><th>nama<th><th>email</th></tr>
                <tr>
                    <td>${user.first_name}</td>
                    <td>${user.email}</td>
                </tr>`;

                return table.insertAdjacentHTML('afterbegin', data);
            });
        }
    }
    xhr.open(metode, url);
    xhr.send();
}

requestData("GET", "https://reqres.in/api/users");