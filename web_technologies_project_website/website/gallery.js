document.addEventListener('DOMContentLoaded', function () {
    // Bilder-Array mit den Dateipfaden
    const images = [
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_1.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_2.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_3.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_4.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_5.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_6.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_7.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_8.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_9.jpg',
        'C:/Users/43677/Documents/FH-Dokumente/3.Semester/Web_Technologien/web_technologies_project_website/pictures/Bild_10.jpg'
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

    // Vorheriges Bild anzeigen
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage(currentIndex);
        updateThumbnails();
    }

    // Nächstes Bild anzeigen
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateMainImage(currentIndex);
        updateThumbnails();
    }

    // Initialisiere Thumbnails und Pfeile
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            updateMainImage(index);
            updateThumbnails();
        });
    });

    const prevImageArrow = document.querySelector('.prev-image');
    prevImageArrow.addEventListener('click', showPreviousImage);

    const nextImageArrow = document.querySelector('.next-image');
    nextImageArrow.addEventListener('click', showNextImage);

    // Initialisierung beim Laden der Seite
    updateMainImage(currentIndex);
    updateThumbnails();
});
