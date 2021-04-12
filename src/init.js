const loadHTML = () => {
    const root = document.querySelector('#page');

    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav-container');

    const logo = document.createElement('a');
    logo.setAttribute('href', 'index.html');

    const logoImg = document.createElement('div');
    logoImg.setAttribute('id', 'logo');

    logo.appendChild(logoImg);
    nav.appendChild(logo);

    const navLinks = document.createElement('nav');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contLink = document.createElement('a');

    homeLink.setAttribute('href', 'index.html');
    homeLink.innerText = "Home";
    homeLink.setAttribute('class', 'accent');
    menuLink.setAttribute('href', 'menu.html');
    menuLink.innerText = "Menu";
    contLink.setAttribute('href', 'contact.html');
    contLink.innerText = "Contact";

    navLinks.appendChild(homeLink);
    navLinks.appendChild(menuLink);
    navLinks.appendChild(contLink);

    nav.appendChild(navLinks);

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    root.appendChild(nav);
    root.appendChild(content);
};

const loadHome =  () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.innerHTML = "welcome, sushi lovers";

    const subtitle = document.createElement('h2');
    subtitle.innerHTML = "to the only destination for sushi in northern england &mdash; <em>literally.</em>"

    const para1 = document.createElement('p');
    para1.innerHTML = 'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari, or sumeshi.'

    const para2 = document.createElement('p');
    para2.innerHTML = 'Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish.'

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(para1);
    content.appendChild(para2);
};

const loadMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const container = document.createElement('div');
    container.setAttribute('id', 'menu-container');

    const rolls = document.createElement('ul');
    rolls.classList.add('menu');

    const rollsTitle = document.createElement('h2');
    rollsTitle.innerHTML = 'shandy rolls';
    rollsTitle.classList.add('menu-section');

    rolls.appendChild(rollsTitle);

    //let's make menu objects?
    const rollMaker = (rollName, ing1, ing2, ing3, ing4, ing5) => {
        
    }
};

export { loadHTML, loadHome, loadMenu }