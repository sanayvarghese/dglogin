// Select DOM Items
const menuBtn = document.querySelector('.menu-btnb');
const menu = document.querySelector('.menub');
const menuNav = document.querySelector('.menu-navb');
const menuBranding = document.querySelector('.menu-brandingb');
const navItems = document.querySelectorAll('.nav-itemb');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}
//Loader clear

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";//class "loader hidden"
});

