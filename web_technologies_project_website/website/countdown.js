// Setzen Sie das Datum und die Uhrzeit, auf die der Countdown abzielt (23.01.2024, 10:00 Uhr)
const targetDate = new Date("2024-01-23T10:00:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // Berechnen Sie die Tage, Stunden, Minuten und Sekunden
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Überprüfen, ob die HTML-Elemente vorhanden sind
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Wenn die Elemente gefunden wurden, aktualisieren Sie die Werte
    if (daysElement && hoursElement && minutesElement && secondsElement) {
        daysElement.textContent = days.toString().padStart(2, "0");
        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
}

// Aktualisieren Sie den Countdown alle 1 Sekunde
setInterval(updateCountdown, 1000);

// Führen Sie die `updateCountdown`-Funktion einmal aus, um sicherzustellen, dass der Countdown sofort angezeigt wird
updateCountdown();

