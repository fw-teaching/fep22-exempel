/** 1. if-satser kanske inte den bästa lösningen */
document.querySelector('#sel-1').addEventListener('change', () => {
    const selection = document.querySelector('#sel-1').value;
    let out = "";
    if (selection == "C") {
        out = "C är ett kompilerat språk.";
    } else if (selection == "Java") {
        out = "Java kör på en virtuell maskin.";
    } else {
        out = "Python är ett interpreterat språk."
    }
    document.querySelector('#out-1').innerText = out;
});

/**
 * array!
 */
const selArray = [
    "C är ett kompilerat språk.",
    "Java kör på en virtuell maskin.",
    "Python är ett interpreterat språk."
]
document.querySelector('#sel-2').addEventListener('change', (evt) => {
    document.querySelector('#out-2').innerText = selArray[evt.target.selectedIndex];
    // selectedIndex: hur mångte <option> har jag valt
});
/**
 * Objekt
 */
const selObj = {
    "java": "Java kör på en virtuell maskin.",
    "c": "C är ett kompilerat språk.",
    "python": "Python är ett interpreterat språk."
}
document.querySelector('#sel-3').addEventListener('change', (evt) => {
    document.querySelector('#out-3').innerText = selObj[evt.target.value];
});
/**
 * Array av objekt
 */
const langArray = [
    {val: "C", info: "C är ett kompilerat språk."}, // langArray[0].val langArray[0].info
    {val: "Java", info: "Java kör på en virtuell maskin."}, //langArray[1][0] langArray[1][1]
    {val: "Python", info: "Python är ett interpreterat språk."},
    {val: "JavaScript", info: "JS kompileras i browsern."}
]
for (let i in langArray) {
    document.querySelector('#sel-4').innerHTML += `<option>${langArray[i].val}</option>`;
}
document.querySelector('#sel-4').addEventListener('change', (evt) => {
    document.querySelector('#out-4').innerText = langArray[evt.target.selectedIndex].info;
});