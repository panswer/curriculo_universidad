const selectIcons = (icon, element, size = '25') => {
    let address = `../img/ionicons/${icon}.svg`;
    element.setAttribute('src', address);
    element.style = `width: ${size}px;hegth:${size}px;`;
}
window.addEventListener('load', event => {
    let icons = document.querySelectorAll('.icons');
    icons.forEach(element => {
        selectIcons(element.getAttribute('alt'), element);
    });
});