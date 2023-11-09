//const puppeteer = require('puppeteer');
//import puppeteer from "puppeteer";

/*document.addEventListener('DOMContentLoaded', function () {
    console.log('add listener');
    const downloadButton = document.getElementById('test-button');

    downloadButton.addEventListener('click', function () {
        console.log('button clicked');
    });
});*/

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // Gehe zur Website
        await page.goto('https://svv.volleynet.at/Termine/32369');

        // Warte, bis die Daten geladen sind (du kannst die Wartezeit anpassen)
        await page.waitForTimeout(5000);

        // Extrahiere Spieltermine nur für ATV Schladming
        const spieltermine = await page.evaluate(() => {
            const spieltermine = [];
            const matches = document.querySelectorAll('.herren-list .spielpaarung');

            matches.forEach(match => {
                const teamText = match.querySelector('.team').innerText;
                const datumZeitText = match.querySelector('.datum-zeit').innerText;

                // Überprüfe, ob das Spiel das Team "ATV Schladming" betrifft
                if (teamText.includes("ATV Schladming")) {
                    const [atvTeam, gegnerTeam] = teamText.split(' vs ');
                    const [datum, zeit] = datumZeitText.split(' um ');

                    spieltermine.push({
                        atvTeam,
                        gegnerTeam,
                        datum,
                        zeit,
                    });
                }
            });

            return spieltermine;
        });

        console.log('Spieltermine für ATV Schladming:');
        console.log(spieltermine);

    } catch (error) {
        console.error('Fehler beim Scrapen der Website:', error);
    } finally {
        await browser.close();
    }
})();


async function scrapeTableData() {
    console.log("trace 0");
    const browser = await puppeteer.launch();
    console.log("trace 1");
    const page = await browser.newPage();

    try {
        console.log("trace 2");

        await page.goto('https://svv.volleynet.at/Termine/32369');

        console.log("trace 3");

        // Hier wird erwartet, dass die Tabelle mit der Klasse "table" existiert.
        // Du solltest den tatsächlichen Selector der Tabelle anpassen.
        await page.waitForSelector('#content_container > form:nth-child(1) > table:nth-child(3)');

        // Extrahiere Daten aus der Tabelle
        const tableData = await page.evaluate(() => {
            const table = document.querySelector('#content_container > form:nth-child(1) > table:nth-child(3)');
            const rows = table.querySelectorAll('tr');
            const data = [];

            rows.forEach(row => {
                const columns = row.querySelectorAll('td');
                const rowData = [];

                columns.forEach(column => {
                    // Hier kannst du die Logik für die Extraktion der Daten in jeder Zelle anpassen.
                    // In diesem Beispiel nehmen wir den Textinhalt der Zelle und entfernen Leerzeichen am Anfang und Ende.
                    const cellData = column.textContent.trim();
                    rowData.push(cellData);
                });

                data.push(rowData);
            });

            return data;
        });

        console.log('Daten aus der Tabelle:');
        console.log(tableData);

    } catch (error) {
        console.error('Fehler beim Scrapen der Website:', error);
    } finally {
        await browser.close();
    }
}
