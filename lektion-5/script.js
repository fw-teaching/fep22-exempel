console.log("lektion 5")

document.querySelector('#colors li:nth-child(3)').style.color = 'blue';
document.querySelector('#colors').style.backgroundColor = '#eeeeee';
//                                CSS:  background-color: silver;

// Läs attribut med getAttribute()
console.log("id för vår ul: ", document.querySelector('#colors').getAttribute('id'))

// Loopa igenom flera element som identifieras med selector 
document.querySelectorAll('#colors li').forEach((elem) => {
    console.log(elem.getAttribute('data-hex'));
})