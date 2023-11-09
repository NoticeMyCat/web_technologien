document.addEventListener('DOMContentLoaded', function () {
    // Bilder-Array mit den Dateipfaden
    const images = [
        '../pictures/Bild_1.jpg',
        '../pictures/Bild_2.jpg',
        '../pictures/Bild_3.jpg',
        '../pictures/Bild_4.jpg',
        '../pictures/Bild_5.jpg',
        '../pictures/Bild_6.jpg',
        '../pictures/Bild_7.jpg',
        '../pictures/Bild_8.jpg',
        '../pictures/Bild_9.jpg',
        '../pictures/Bild_10.jpg'
    ];

    // Initialer Index des Hauptbilds
    let currentIndex = 0; // Hier wird der Index 4 gesetzt, um das 5. Bild als zentrales Bild anzuzeigen.

    // Hauptbild-Element
    const mainImage = document.querySelector('.main-image');

    // Thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Aktualisiere das Hauptbild
    function updateMainImage(index) {
        mainImage.src = images[index];
        currentIndex = index;
    }

    // Aktualisiere Thumbnails
    function updateThumbnails() {
        thumbnails.forEach((thumbnail, index) => {
            if (index == currentIndex) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }

    // Initialisiere Thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            updateMainImage(index);
            updateThumbnails();
        });
    });

    // Initialisierung beim Laden der Seite
    updateMainImage(currentIndex);
    updateThumbnails();
});
