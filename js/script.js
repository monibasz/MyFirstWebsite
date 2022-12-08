let navbar = document.querySelector ('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toogle('active');
}

window.onscroll =() =>{
    navbar.classList.remove('active');
}