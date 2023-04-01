let dropbutton = document.querySelector('.Services');
let dropcontent = document.querySelector('.dropdown-content');

dropbutton.addEventListener('click', ()=> {
    dropcontent.classList.toggle('dropdown-content-resp')
})