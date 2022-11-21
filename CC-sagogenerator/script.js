console.log("INIT")

function generate() {
    const person = document.querySelector("#person").value;
    const butik = document.querySelector("input[name=butik]:checked").value;
    const vara = document.querySelector("#vara").value || 'tomhet';
    const ending = document.querySelector("#ending").value; // OBS använd value också för textarea

    let saga = `
        Från ${butik} kl. fem ett litet ${person} gick hem.<br>
        En kanna full med ${vara} han bar<br>
        ${ending}
    `;

    if (!document.querySelector("#myndig").checked) {
        saga = saga.replace(' öl', ' saft');
    }

    document.querySelector("#out").innerHTML = saga;
}

document.querySelector("#btn-generate").addEventListener('click', () => generate());