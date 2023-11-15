getData();

function getData() {
	$.ajax({
		url: 'scraper.php',
		type: 'POST',
		data: {
			"url": "https://svv.volleynet.at/Termine/32369"
			// "url": "https://svv.volleynet.at/Termine/32369/Alle?sort=dat" für alle Termine
		},
		dataType: 'html',
		success: function (res) {
			let entries_all = [];
			let entries1 = $(res).find(".tablehell");
			let entries2 = $(res).find(".tabledunkel");
			for (let i = 0; i < entries1.length; i++) {
				let data = $(entries1[i]).find("td");
				entries_all.push({
					"Datum": $(data[3]).html(),
					"Zeit": $(data[4]).html(),
					"Heimteam": $(data[5]).html(),
					"Gastteam": $(data[6]).html(),
					"Halle": $(data[7]).html(),
					"Karte": $(data[8]).html().split("&nbsp;")[1]
				});
				if (i < entries2.length) {
					let data = $(entries2[i]).find("td");
					entries_all.push({
						"Datum": $(data[3]).html(),
						"Zeit": $(data[4]).html(),
						"Heimteam": $(data[5]).html(),
						"Gastteam": $(data[6]).html(),
						"Halle": $(data[7]).html(),
						"Karte": $(data[8]).html().split("&nbsp;")[1]
					});
				}
			}

			let entries_filtered = [];
			for (let i = 0; i < entries_all.length; i++) {
				if (
					entries_all[i]["Heimteam"] === "ATV Schladming" ||
					entries_all[i]["Gastteam"] === "ATV Schladming"
				)
					entries_filtered.push(entries_all[i]);
			}

			let html = "<table>";
			html +=
				"<tr><th>Datum</th><th>Zeit</th><th>Heimteam</th><th>Gastteam</th><th>Halle</th><th>Karte</th></tr>";
			for (let i = 0; i < entries_filtered.length; i++) {
				html +=
					"<tr><td>" +
					entries_filtered[i]["Datum"] +
					"</td><td>" +
					entries_filtered[i]["Zeit"] +
					"</td><td>" +
					entries_filtered[i]["Heimteam"] +
					"</td><td>" +
					entries_filtered[i]["Gastteam"] +
					"</td><td>" +
					entries_filtered[i]["Halle"] +
					"</td><td>" +
					entries_filtered[i]["Karte"] +
					"</td></tr>";
			}
			html += "</table>";
			$("#tableDataHerren").html(html);
		},
	});
}
