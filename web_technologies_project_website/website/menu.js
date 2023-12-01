// Auswahl der DOM-Elemente:
const mainMenu = document.querySelector('.nav-list'); // Wählt das Navigationsmenü mit der Klasse 'nav-list' aus.
const closeMenu = document.querySelector('.closeMenu'); // Wählt das Element mit der Klasse 'closeMenu' aus.
const openMenu = document.querySelector('.openMenu'); // Wählt das Element mit der Klasse 'openMenu' aus.
const menu_items = document.querySelectorAll('nav .nav-list li a'); // Wählt alle Anker-Elemente innerhalb von Listenelementen im Navigationsmenü aus.

// Hinzufügen von Event-Listenern:
openMenu.addEventListener('click', show); // Horcht auf ein Klick-Ereignis auf dem openMenu-Element und ruft die 'show'-Funktion auf.
closeMenu.addEventListener('click', close); // Horcht auf ein Klick-Ereignis auf dem closeMenu-Element und ruft die 'close'-Funktion auf.

// Menü schließen, wenn auf ein Menüelement geklickt wird
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close(); // Horcht auf Klick-Ereignisse auf jedem Menüelement und ruft die 'close'-Funktion auf, wenn geklickt wird.
    })
})

// Funktionen zur Ereignisbehandlung:
function show() {
    mainMenu.style.display = 'flex'; // Zeigt das Navigationsmenü, indem der Anzeigestil auf 'flex' gesetzt wird.
    mainMenu.style.top = '0'; // Setzt die obere Position des Navigationsmenüs auf '0'.
}

function close() {
    mainMenu.style.top = '-100vh'; // Versteckt das Navigationsmenü, indem die obere Position auf '-100vh' (außerhalb des Bildschirms) gesetzt wird.
    setTimeout(function () {
        mainMenu.style.display = 'none'; // Nach einer Verzögerung von 1000 Millisekunden (1 Sekunde) wird die Anzeige des Navigationsmenüs auf 'none' gesetzt.
    }, 1000);
}
