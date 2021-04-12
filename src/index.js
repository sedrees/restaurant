import {loadHTML, loadMenu} from './init'

loadHTML();

const nav = document.querySelectorAll('nav a');

nav.forEach((link) => {
    link.addEventListener('click', () => {
        loc = link.innerHTML;
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