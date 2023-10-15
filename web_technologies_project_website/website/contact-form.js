document.addEventListener("DOMContentLoaded", function () {
    // Elemente aus dem DOM abrufen
    var submitButton = document.getElementById("submit-button");
    var herrenCheckbox = document.getElementById("herrenteam");
    var damenCheckbox = document.getElementById("damenteam");
    var nachnameInput = document.getElementById("nachname");
    var vornameInput = document.getElementById("vorname");
    var emailInput = document.getElementById("email");
    var messageTextarea = document.getElementById("message");

    // Funktion zur Validierung des Formulars
    function validateForm() {
        // Überprüfen, ob Vorname, Nachname, E-Mail, Nachricht ausgefüllt sind
        var nachname = nachnameInput.value.trim();
        var vorname = vornameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageTextarea.value.trim();

        // Überprüfen, ob Vorname, Nachname, E-Mail, Nachricht ausgefüllt sind
        if (nachname !== "" && vorname !== "" && email !== "" && message !== "") {
            submitButton.disabled = false; // Aktivieren Button
        } else {
            submitButton.disabled = true; // Deaktivieren Button
        }
    }

    // Fügen Sie Eventlistener für Änderungen in Formularfeldern hinzu
    herrenCheckbox.addEventListener("change", function () {
        if (herrenCheckbox.checked) {
            damenCheckbox.checked = false;
        } else {
            damenCheckbox.checked = true;
        }
        validateForm();
    });

    damenCheckbox.addEventListener("change", function () {
        if (damenCheckbox.checked) {
            herrenCheckbox.checked = false;
        } else {
            herrenCheckbox.checked = true;
        }
        validateForm();
    });

    nachnameInput.addEventListener("input", validateForm);
    vornameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    messageTextarea.addEventListener("input", validateForm);

    //initialer Status
    validateForm();
});

//Email-Programm input
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars

        // Formulardaten abrufen
        const anfrage = document.querySelector('input[name="anfrage"]:checked').value;
        const nachname = document.getElementById('nachname').value;
        const vorname = document.getElementById('vorname').value;
        const email = document.getElementById('email').value;
        const nachricht = document.getElementById('message').value;

        // E-Mail-Adresse, Betreff und Nachricht zusammenstellen
        const from = email;
        const mailto = 'mailto:info@atv-schladming.at';
        const subject = 'Volleyball ' + anfrage + ' ' + nachname + ' ' + vorname;
        const body = nachricht;

        // E-Mail-Link erstellen
        const emailLink = mailto + '?from=' + encodeURIComponent(from) + '&subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        // E-Mail-Link öffnen
        window.location.href = emailLink;
    });
});

