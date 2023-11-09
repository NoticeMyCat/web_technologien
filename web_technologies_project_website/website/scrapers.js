const puppeteer = require('puppeteer');

async function scrapeTableData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {

        await page.goto('https://svv.volleynet.at/Termine/32369');

        // Hier wird erwartet, dass die Tabelle mit der Klasse "table" existiert.
        // Du solltest den tatsächlichen Selector der Tabelle anpassen.
        await page.waitForSelector('#content_container > form:nth-child(1) > table:nth-child(3)');

        // Extrahiere Daten aus der Tabelle
        const tableData = await page.evaluate(() => {
            const table = document.querySelector('#content_container > form:nth-child(1) > table:nth-child(3)');
            const rows = table.querySelectorAll('tr');
            console.log(rows);
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
        console.log(tableData);
        document.querySelector("#tableData").innerHTML = tableData;



    } catch (error) {
        console.error('Fehler beim Scrapen der Website:', error);
    } finally {
        await browser.close();
    }
}

scrapeTableData();