const container = document.querySelector('.container');
const img = document.querySelector('.imgres');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className === 'thumb') {
        img.src = e.target.src;
        // console.log(e.target.alt);
    }
});