console.log("lektion 5")

document.querySelector('#colors li:nth-child(3)').style.color = 'blue';
document.querySelector('#colors').style.backgroundColor = '#eeeeee';
//                                CSS:  background-color: silver;

// Läs attribut med getAttribute()
console.log("id för vår ul: ", document.querySelector('#colors').getAttribute('id'))

// Loopa igenom flera element som identifieras med selector 
document.querySelectorAll('#colors li').forEach((elem) => {
    console.log(elem.getAttribute('data-hex'));

    elem.addEventListener('click', (evt) => {
        elem.style.backgroundColor = 'coral';

        document.querySelectorAll('#colors li').forEach((elem2) => {

            if (elem2 != evt.target) {
                elem2.style.backgroundColor = 'silver';
            }
        })

    });
})

// Skapa lyssnare på container-element (parent-element)
document.querySelector('#colors').addEventListener('mouseover', (evt) => {
    console.log(evt)
    if (evt.target.id == "green") {
        console.log("supergreen!");
    }
});

// Skapa lyssnare på container-element (parent-element)
document.querySelector('#slider').addEventListener('input', (evt) => {
    console.log(evt.target.value);
});