const mainMenu = document.querySelector('.nav-list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .nav-list li a');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100vh';
    setTimeout(function () {
        mainMenu.style.display = 'none';
    }, 1000);
}