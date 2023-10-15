document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('button-anmeldeformular');

    downloadButton.addEventListener('click', function () {
        const pdfUrl = 'https://www.atv-schladming.at/wp-content/uploads/2023/03/Anmeldung_ATV_neu.pdf';

        // Erstelle ein unsichtbares a-Element, um das PDF in einem neuen Tab zu öffnen
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = pdfUrl;
        a.target = '_blank'; // Öffne den Link in einem neuen Tab

        // Füge das a-Element dem Dokument hinzu und klicke es, um das PDF zu öffnen
        document.body.appendChild(a);
        a.click();

        // Entferne das a-Element aus dem Dokument
        document.body.removeChild(a);
    });
});
