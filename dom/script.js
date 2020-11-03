// const nama  = function() {
// 	let namaId  = document.querySelector('#nama');
// 	namaId.innerText = 'TROY';
// 	setInterval(function(){
// 		namaId.style.background = 'green';
// 	}, 2000, setTimeout(function(){
// 		namaId.style.color = 'white';
// 	}, 2000));
// };

// const judul = document.querySelector('#judul');
// judul.addEventListener("click", function(){
// 	nama();
// 	judul.style.color = 'red';
// });

// const p = document.querySelectorAll('.paragrafisi');
// for(let i=0; i < p.length; i++){
// 	p[i].style.backgroundColor = '#eee';
// }

// console.log(judul.nodeName);

function $(el){
	return (el.charAt(0) === '#') ? document.querySelector(el) : document.querySelectorAll(el)
}

// dom selection
// let title = document.getElementById('judul');
// let contentt = document.getElementsByClassName('isi')[0];
// let tag = document.getElementsByTagName('p')[0];
// let title1 = document.querySelector('#judul');
// let paragraf = document.querySelectorAll('.paragrafisi')[1];

$('#judul').style.color = 'red'
$('#judul').addEventListener('mouseover', function(){
	$('#judul').style.backgroundColor = '#000'
})
// contentt.style.color = 'green';
// tag.style.fontSize = '24px';
// // alert(paragraf);

// // dom manipulation 
// let name = document.querySelector('#nama');
// let el = document.createElement('h2');
// let text = document.createTextNode('dimarzio');
// el.appendChild(text);
// name.appendChild(el);

// name.removeChild(el);
// contentt.replaceChild(el, paragraf);

// el.addEventListener('click', function(){
// 	el.style.display = 'none';
// })

// title1.addEventListener('mouseover', function(){
// 	el.style.display = 'inline';
// })