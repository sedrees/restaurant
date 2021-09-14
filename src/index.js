import {loadHTML, loadHome, loadMenu, loadOrder, loadCont, navigation} from './init'

loadHTML();
loadHome();

const nav = document.querySelectorAll('nav a');

nav.forEach((link) => {
    link.addEventListener('click', () => {
        navigation.toggle(link);
        let loc = link.innerHTML;
        switch (loc) {
            case 'Home':
                loadHome();
                break;
            case 'Menu':
                loadMenu();
                break;
            case 'Order':
                loadOrder();
                break;
            case 'Contact':
                loadCont();
                break;
        }
    });
});