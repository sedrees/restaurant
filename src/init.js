// This file is meant to demonstrate proficiency in generating HTML with JS from scratch - obviously not a good practice overall however.

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

    navLinks.appendChild(navigation.create('Home', true));
    navLinks.appendChild(navigation.create('Menu', false));
    navLinks.appendChild(navigation.create('Order', false));
    navLinks.appendChild(navigation.create('Contact', false));

    nav.appendChild(navLinks);

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    root.appendChild(nav);
    root.appendChild(content);
};

const navigation = (() => {
    let current;
    const create = (page, isCurrent) => {
        const newLink = document.createElement('a');
        newLink.innerText = page;
        newLink.setAttribute('href', '#');
        if (isCurrent) {
            newLink.classList.add('accent');
            current = newLink;
        }
        return newLink;
    }
    const toggle = (link) => {
        if (link != current) {
            link.classList.add('accent');
            current.classList.remove('accent');
            current = link;
        }
    }
    return {create,toggle};
})();

const loadHome = () => {
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

const loadOrder = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const pfcontainer = document.createElement('div');
    pfcontainer.setAttribute('data-paperform-id', 'sbsorder');

    const pfscript = document.createElement('script');
    pfscript.src = 'https://paperform.co/__embed.min.js';
    
    content.appendChild(pfcontainer);
    document.body.appendChild(pfscript);
       
};

const loadMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const container = document.createElement('div');
    container.setAttribute('id', 'menu-container');

    // Rolls
    const rolls = document.createElement('ul');
    rolls.classList.add('menu');

    const rollsTitle = document.createElement('h2');
    rollsTitle.innerHTML = 'shandy rolls';
    rollsTitle.classList.add('menu-section');

    rolls.appendChild(rollsTitle);

    class Roll {
        constructor(rollName, price, ...ingredients) {
            this.name = rollName;
            this.price = price;
            this.ingredients = ingredients;
        }
        display() {
            const seaweed = document.createElement('li');

            const rice = document.createElement('div');
            rice.classList.add('menu-desc');

            const rollTitle = document.createElement('h3');
            rollTitle.innerHTML = this.name;

            const rollDesc = document.createElement('h4');
            rollDesc.innerText = this.ingredients;

            const wasabi = document.createElement('div');
            wasabi.classList.add('menu-price');
            wasabi.innerText = this.price;

            rice.appendChild(rollTitle);
            rice.appendChild(rollDesc);

            seaweed.appendChild(rice);
            seaweed.appendChild(wasabi);

            rolls.appendChild(seaweed);
        }
    }

    new Roll('double roll', 9, ['tuna', ' yellowtail', ' scallions' , ' roe', ' ponzu sauce']).display();
    new Roll('midori roll', 7, ['tuna', ' salmon', ' avocado', ' sesame seeds']).display();
    new Roll('caterpillar roll', 8, ['eel', ' cucumber', ' avocado', ' ponzu sauce']).display();
    new Roll('triple x', 9, ['salmon', ' tuna', ' whitefish', ' white sauce']).display();
    new Roll('phoenix roll', 9, ['spicy tuna', ' roe', ' tempura']).display();
    new Roll('beauty alaska roll', 10, ['spicy salmon', ' cucumber', ' avocado', ' scallions']).display();

    container.appendChild(rolls);

    // Nigiri
    const nigiri = document.createElement('ul');
    nigiri.classList.add('menu');

    const nigiriTitle = document.createElement('h2');
    nigiriTitle.innerHTML = 'nigiri selection';
    nigiriTitle.classList.add('menu-section');

    nigiri.appendChild(nigiriTitle);

    class Side {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        display(section) {
            const seaweed = document.createElement('li');

            const rice = document.createElement('div');
            rice.classList.add('menu-desc');
            const sideTitle = document.createElement('h3');
            sideTitle.innerHTML = this.name;
            rice.appendChild(sideTitle);
    
            const wasabi = document.createElement('div');
            wasabi.classList.add('menu-price');
            wasabi.innerHTML = this.price;
    
            seaweed.appendChild(rice);
            seaweed.appendChild(wasabi);
            
            section.appendChild(seaweed);
        }
    }
    new Side('tuna', '2').display(nigiri);
    new Side('shrimp', '1').display(nigiri);
    new Side('salmon', '2').display(nigiri);
    new Side('smoked salmon', '2').display(nigiri);
    new Side('octopus', '1').display(nigiri);
    new Side('yellowtail', '2').display(nigiri);
    new Side('scallop', '3').display(nigiri);
    new Side('eel', '2').display(nigiri);
    
    container.appendChild(nigiri);

    // Sides
    const sides = document.createElement('ul');
    sides.classList.add('menu');

    const sideTitle = document.createElement('h2');
    sideTitle.innerHTML = 'starters &amp; sides';
    sideTitle.classList.add('menu-section');

    sides.appendChild(sideTitle);

    new Side('garden salad', '2').display(sides);
    new Side('gyoza', '4').display(sides);
    new Side('tuna tataki', '7').display(sides);
    new Side('miso soup', '2').display(sides);
    new Side('fried soft shell crab', '7').display(sides);

    container.appendChild(sides);
    content.appendChild(container);
};

const loadCont = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const deets = document.createElement('div');
    deets.setAttribute('id', 'deets');

    class Detail {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        display() {
            const wrapper= document.createElement('div');
            wrapper.classList.add('deet');

            const deetTitle = document.createElement('h2');
            deetTitle.classList.add('menu-section');
            deetTitle.innerHTML = this.title;
            wrapper.appendChild(deetTitle);

            const deetDeet = document.createElement('p');
            deetDeet.innerHTML = this.content;
            wrapper.appendChild(deetDeet);

            deets.appendChild(wrapper);
        }
    }

    new Detail('find us at', '012 High Street <br> A Nice Place <br> AIB 2C3').display();
    new Detail('call us at', '01234567890').display();
    new Detail('email us at', 'sushi@example.com').display();

    const map = document.createElement('img');
    map.setAttribute('src', 'img/wearehere.png');
    map.setAttribute('alt', 'Map showing high street location');

    content.appendChild(deets);
    content.appendChild(map);
};

export { loadHTML, loadHome, loadOrder, loadMenu, loadCont, navigation }