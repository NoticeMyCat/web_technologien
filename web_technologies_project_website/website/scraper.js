getData();
	function getData() {
		$.ajax({
			url: 'scraper.php',
			type: 'POST',
			data: {
				"url": "https://svv.volleynet.at/Termine/32369/Alle?sort=dat"
			},
			dataType: 'html',
			success: function(res) {
				let entries_all = [];
				let entries1 = $(res).find(".tablehell");
				let entries2 = $(res).find(".tabledunkel");
				for (let i=0; i<entries1.length; i++) {
					let data = $(entries1[i]).find("td");
					entries_all.push(
						{
							"Rd.":$(data[0]).html(),
							"Nr.":$(data[1]).html(),
							"Tag":$(data[2]).html().replace(/&nbsp;/g,''),
							"Datum":$(data[3]).html(),
							"Zeit":$(data[4]).html(),
							"Heimteam":$(data[5]).html(),
							"Gastteam":$(data[6]).html(),
							"Halle":$(data[7]).html(),
							"Karte":$(data[8]).html().replace(/&nbsp;/g,''),
							"1. Schiedsrichter":$(data[9]).html(),
							"2. Schiedsrichter":$(data[10]).html()
						}
					);
					if (i<entries2.length) {
						let data = $(entries2[i]).find("td");
						entries_all.push(
							{
								"Rd.":$(data[0]).html(),
								"Nr.":$(data[1]).html(),
								"Tag":$(data[2]).html().replace(/&nbsp;/g,''),
								"Datum":$(data[3]).html(),
								"Zeit":$(data[4]).html(),
								"Heimteam":$(data[5]).html(),
								"Gastteam":$(data[6]).html(),
								"Halle":$(data[7]).html(),
								"Karte":$(data[8]).html().replace(/&nbsp;/g,''),
								"1. Schiedsrichter":$(data[9]).html(),
								"2. Schiedsrichter":$(data[10]).html()
							}
						);
					}
				}
				//console.log(entries_all);
				let entries_filtered = [];
				for (let i=0; i<entries_all.length; i++) {
					if (entries_all[i]["Heimteam"] === "ATV Schladming" || entries_all[i]["Gastteam"] === "ATV Schladming")
						entries_filtered.push(entries_all[i]);
				}
				//console.log(entries_filtered);
				let html = "<table>";
				html += "<tr><th>Rd.</th><th>Nr.</th><th>Tag</th><th>Datum</th><th>Zeit</th><th>Heimteam</th><th>Gastteam</th><th>Halle</th><th>Karte</th><th>1. Schiedsrichter</th><th>2. Schiedsrichter</th></tr>"
				for (let i=0; i<entries_filtered.length; i++) {
					html += "<tr><td>"+entries_filtered[i]["Rd."]+"</td><td>"+entries_filtered[i]["Nr."]+"</td><td>"+entries_filtered[i]["Tag"]+"</td><td>"+entries_filtered[i]["Datum"]+"</td><td>"+entries_filtered[i]["Zeit"]+"</td><td>"+entries_filtered[i]["Heimteam"]+"</td><td>"+entries_filtered[i]["Gastteam"]+"</td><td>"+entries_filtered[i]["Halle"]+"</td><td>"+entries_filtered[i]["Karte"]+"</td><td>"+entries_filtered[i]["1. Schiedsrichter"]+"</td><td>"+entries_filtered[i]["2. Schiedsrichter"]+"</td></tr>";
				}
				html += "</table>";
				$("#tableData").html(html);
			}
		});
	}