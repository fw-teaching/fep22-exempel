console.log("Hello from js-file!");

function minFunktion() {
    console.log("Funktionen kördes!");
}

minFunktion();

function buttonHandler() {
    console.log("Du klickade här!");
    // Skapa en alert-popup
    alert("Du klickade på knappen.");
}

function secondButton() {
    // Prompt kan användas för att ta emot input av användaren
    const namn = prompt("Vad heter du?");
    alert("Hello " + namn);
}

function thirdButton() {
    let namn = document.querySelector("#namn").value;
    const namn2 = document.getElementById("namn").value; // samma sak, OBS ingen # för id
    console.log(namn, namn2);

    if (namn == "Fredde" || namn == "Fredrik") {
        namn = namn + " Welander";
    } else if (namn == "Dennis") {
        namn = "bistromd";
    } else {
        console.log("Okänt efternamn");
    }

    document.querySelector('#hello-output').innerText = `Hello ${namn}!`; 

}


