var map = L.map('map').setView([40.613,22.97], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([40.613,22.972
]).addTo(map)
		.bindPopup('PAOK<br> Toumba Stadium')
		.openPopup();	