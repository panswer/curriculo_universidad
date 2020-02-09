let navbar_active = false;
let btn_navbar_principal = document.querySelector('#btn-menu-principal');
let navbar_principal = document.querySelector('.navbar_principal');
let navbar_icon = document.querySelector('.navbar .icons');
btn_navbar_principal.addEventListener('click', event => {
    event.preventDefault();
    if (navbar_active) {
        navbar_principal.setAttribute('class', 'navbar_principal nav_principal_off');
    } else {
        navbar_principal.setAttribute('class', 'navbar_principal');
    }
    navbar_active = !navbar_active;
});