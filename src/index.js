import {loadHTML, loadHome, loadMenu} from './init'

loadHTML();
loadHome();

const nav = document.querySelectorAll('nav a');

nav.forEach((link) => {
    link.addEventListener('click', () => {
        let loc = link.innerHTML;
        switch (loc) {
            case 'Home':
                loadHome();
                break;
            case 'Menu':
                loadMenu();
                break;
            case 'Contact':
                loadCont();
                break;
        }
    });
});