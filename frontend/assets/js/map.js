var axios = "https://unpkg.com/axios/dist/axios.min.js";
var mymap = L.map('mapid').setView([50.110, 8.682], 13);50.110

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox.streets',
   accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamloZHZxZDAxYnU5M3FsaDBkNm12ejlvIn0.ccE1-K_ZT2BOId24hO4BvQ'
}).addTo(mymap);


axios.get('http://localhost:3000/bestellungen')
.then(function (response) {
  console.log(response);
  for (index in response.data){
    var item = response.data[index];
    console.log(item.lieferadresse);
  }
})
