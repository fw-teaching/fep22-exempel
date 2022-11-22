console.log("!!")

/**
 * localStorage
 */
if (localStorage.getItem('visitCount')) {
    let currentCount = localStorage.getItem('visitCount');
    document.querySelector("#counter").innerText = `
        Du har besökt sidan ${currentCount} gånger.
    `;
    currentCount++;
    localStorage.setItem('visitCount', currentCount);

} else {
    localStorage.setItem('visitCount', 1);
}


/**
 * Cookies
 * 
 */
function getCookie(cookieName) {
    // document.cookie: "visitorName=Fredde; foo=bar; boo=baz;"
    // split(";"): ['visitorName=Fredde','foo=bar','boo=baz']
    for (cookie of document.cookie.split(";")) {

        if (cookie.split("=")[0] == cookieName) {
            // 'visitorName=Fredde'.split('='):  
            //          ==> ['visitorName','Fredde']
            return cookie.split("=")[1];
        }
    }
    return false;
}

function saveCookie(cookieName, cookieValue) {
    document.cookie = `${cookieName}=${cookieValue}; SameSite=Lax`;
    console.log(document.cookie);
}

document.querySelector('#btn-save').addEventListener('click', () => {
    const namn = document.querySelector('#name').value;
    saveCookie('visitorName', namn);
})

document.cookie = "visitorName=Fredde";
//document.cookie = "otherVisitor=Dennis";

if (getCookie('visitorName')) {
    document.querySelector("#welcome").innerText = `
        Välkommen tillbaka ${getCookie('visitorName')}
    `;
}