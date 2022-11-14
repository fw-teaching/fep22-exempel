console.log("timers.js INIT")

/*
// anonym callback-funktionen direkt i setInterval
let count = 0;
setInterval(function () {
    console.log('Hello1', count);
    count++;
}, 1000)

// samma sak med namngiven callback-funktion
let count2 = 0;
function timerAction() {
    console.log('Hello2', count2);
    count2--;
}
setInterval(timerAction, 1000);
*/
// Namnge setInterval så att du kommer åt den senare
let count3 = 0;
const myTimer = setInterval(function () {
    console.log('Hello3 !!! ', count3);
    count3++;
}, 1000)

// Lyssnare för knapp (Event Listener)
document.querySelector('#stop-hello').addEventListener('click', function (evt) {
    console.log(`Du klickade på ${evt.target.tagName} ${evt.target.id}`);
    clearInterval(myTimer);
});






// Date() utan argument ger tiden just nu.

setInterval(function () {
    const nu = new Date();
    document.querySelector('#klocka').innerText = `
        Klockan är ${nu.getHours()}:${nu.getMinutes()}:${nu.getSeconds()}
    `;
}, 1000);

// OBS månaden 0-11: 11 = december!
const juldag = new Date(2022, 11, 25, 15, 30);
console.log(juldag)

