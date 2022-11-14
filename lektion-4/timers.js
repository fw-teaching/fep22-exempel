console.log("timers.js INIT")

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

// Namnge setInterval så att du kommer åt den senare
let count3 = 0;
const myTimer = setInterval(function () {
    console.log('Hello3 !!! ', count3);
    count3++;
}, 1000)
// funktion för att hantera avstängning av myTimer
function stopHello3() {
    clearInterval(myTimer);
}