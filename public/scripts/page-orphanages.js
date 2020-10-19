// Create map
const map = L.map("mapid").setView([-23.220264,-45.994069,11.5], 12)

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// Create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar da meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')

// Create and add marker
L.marker([-23.220264,-45.994069,11.5], { icon })
  .addTo(map)
  .bindPopup(popup)
