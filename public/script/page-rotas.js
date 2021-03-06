const mymap = L.map('mapid').setView([-11.858269, -55.494494], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([-11.858269, -55.494494]).addTo(mymap)
    .bindPopup('Inicio da rota')
    .openPopup();

L.marker([-11.784156, -55.476437]).addTo(mymap)
    .bindPopup('Fim da rota')
    .openPopup();
