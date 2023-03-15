const BASE_URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = "67fceed73635450e84792324231503";

function getWeatherData() {
  // Utilisez l'API de géolocalisation pour récupérer les coordonnées de l'utilisateur
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Envoyez une nouvelle requête API avec les coordonnées de l'utilisateur
    fetch(
      `${BASE_URL}?key=${API_KEY}&q=${lat},${lon}&lang=Fr`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let city = data.location.name;
        let temp = data.current.temp_c;
        let imgUrl = data.current.condition.icon;
        let desc = data.current.condition.text;

        // Mettez à jour les éléments HTML avec les nouvelles données météo
        document.getElementById("city").innerText = city;
        document.getElementById("icon").src = "http:" + imgUrl;
        document.getElementById("temp").innerText = temp + "°C";
        document.getElementById("desc").innerText = desc;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

// Charger la météo avec la géolocalisation par défaut au chargement initial de la page
getWeatherData();
