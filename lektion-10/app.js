console.log('app INIT')

const contentItems = [
    { menuTitle: "Hem", url: "./content/home.html" },
    { menuTitle: "Info", url: "./content/info.html" },
    { menuTitle: "Kontakt", url: "./content/kontakt.html" },
    { menuTitle: "Joke", url: "https://v2.jokeapi.dev/joke/Programming?format=txt&type=single&safe-mode"}
];

async function loadContent(contentUrl) {
    const resp = await fetch(contentUrl);
    const content = await resp.text();

    document.querySelector('#content').innerHTML = content;
}

/** Stock HTML/JS/CSS */

for (item of contentItems) {
    document.querySelector('#menuitems').innerHTML += `
        <div data-url="${item.url}">${item.menuTitle}</div>
    `;
}

function toggleMenu() {
    const menu = document.querySelector('#menuitems');
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.querySelectorAll('#menuitems > div').forEach((item) => {
    console.log(item)
    item.addEventListener('click', () => {
        loadContent(item.getAttribute('data-url'));
        toggleMenu();
    });
});
document.querySelector('#hamburger').addEventListener('click', toggleMenu);

/** Bootstrap */

for (item of contentItems) {
    document.querySelector('.navbar-nav').innerHTML += `
        <div class="nav-item nav-link text-white" data-url="${item.url}">${item.menuTitle}</div>
    `;
}
document.querySelectorAll('.navbar-nav div').forEach((item) => {
    console.log(item)
    item.addEventListener('click', () => {
        loadContent(item.getAttribute('data-url'));
    });
})

loadContent('./content/home.html');

