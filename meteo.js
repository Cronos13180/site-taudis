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


// FONCTION HOROSCOPE

function generateSimpleHoroscope() {
  const signes = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
  ];

  const phrases = [
    "Aujourd'hui est un jour propice à la réflexion.",
    "Ne laissez pas les obstacles vous décourager.",
    "Soyez ouvert aux nouvelles opportunités qui se présentent.",
    "Votre patience sera récompensée très bientôt.",
    "Un ami proche aura besoin de votre soutien aujourd'hui.",
    "Accordez-vous du temps pour vous détendre et vous ressourcer.",
    "Les étoiles sont alignées en votre faveur.",
    "Exprimez votre créativité pour résoudre un problème.",
    "Il est temps de prendre des décisions importantes.",
    "Ne sous-estimez pas votre pouvoir de persuasion.",
    "Un nouveau départ est à portée de main.",
    "Sachez reconnaître les opportunités lorsqu'elles se présentent.",
  ];

  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const phraseIndex = dayOfYear % phrases.length;

  let horoscope = {};
  signes.forEach((signe, index) => {
    horoscope[signe] = phrases[(index + phraseIndex) % phrases.length];
  });

  return horoscope;
}


function getRandomSign(signs) {
  const randomIndex = Math.floor(Math.random() * signs.length);
  return signs[randomIndex];
}



let currentIndex = 0;

function displaySimpleHoroscope() {
  const horoscope = generateSimpleHoroscope();
  const signes = Object.keys(horoscope);
  const signeActuel = signes[currentIndex];
  const phraseActuelle = horoscope[signeActuel];

  const signeElement = document.getElementById("signe");
  const phraseElement = document.getElementById("phrase");

  signeElement.textContent = `${signeActuel} - `;
  phraseElement.textContent = phraseActuelle;

  currentIndex = (currentIndex + 1) % signes.length;
}

// Afficher l'horoscope simple au chargement de la page
displaySimpleHoroscope();
// Mettre à jour l'horoscope simple toutes les 3 secondes
setInterval(displaySimpleHoroscope, 3000);


