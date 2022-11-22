document.querySelectorAll('.thumb').forEach((elem) => {
    console.log(elem)

    elem.addEventListener('click', () => {
        const bigImg = elem.getAttribute('data-big');
        document.querySelector('#big-img > img').setAttribute('src', bigImg);
        document.querySelector('#big-img').style.display = 'flex';
    });
});

function closeLightbox() {
    document.querySelector('#big-img').style.display = 'none';
}

// Stäng lightboxen
document.querySelector('#big-img').addEventListener('click', closeLightbox);
document.addEventListener('keydown', closeLightbox); // Lyssna på keyboarden