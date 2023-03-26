async function performSearch(event, searchInput, resultPageUrl) {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();
  let results = [];

  // Charger le contenu de la page lidl-interviews.html en arrière-plan
  const response = await fetch("../lidl-interviews/lidl-interviews.html");
  const text = await response.text();
  const parser = new DOMParser();
  const lidlInterviewsDocument = parser.parseFromString(text, "text/html");

  // Parcourir les conteneurs de diapositives de la page lidl-interviews.html
  const containers = lidlInterviewsDocument.querySelectorAll(".container");
  containers.forEach(container => {
    const title = container.querySelector(".title").textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      const record = container.querySelector(".record-icon");
      const recordIcon = record ? record.outerHTML : "";
      const miniatureYt = container.querySelector(".miniature-Yt").innerHTML;

      results.push({
        title: title,
        recordIcon: recordIcon,
        miniatureYt: miniatureYt,
      });
    }
  });

  // Envoyer les résultats à la nouvelle page
  const resultsUrl = `${resultPageUrl}?results=${encodeURIComponent(JSON.stringify(results))}`;
  window.open(resultsUrl, "_self");
}

// Récupérer les éléments de la page HTML
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Pour la page de résultats
const searchFormResults = document.getElementById("search-form-results");
const searchInputResults = document.getElementById("search-input-results");

searchForm.addEventListener("submit", function (event) {
  performSearch(event, searchInput, "../affichage-resultats/affichage-resultats.html");
});

if (searchFormResults) {
  searchFormResults.addEventListener("submit", function (event) {
    performSearch(event, searchInputResults, "affichage-resultats.html");
  });
}

// Récupérer les résultats de la recherche à partir de l'URL et les afficher
const urlParams = new URLSearchParams(window.location.search);
const resultsParam = urlParams.get("results");

if (resultsParam) {
  const results = JSON.parse(decodeURIComponent(resultsParam));
  const resultContainer = document.getElementById("result-container");

  if (results.length === 0) {
    const noResults = document.getElementById("no-results");
    noResults.style.display = "block";
  } else {
    results.forEach(result => {
      const resultElement = document.createElement("div");
      resultElement.classList.add("result");

      if (result.recordIcon) {
        resultElement.innerHTML += `<div class="record-icon">${result.recordIcon}</div>`;
      }

      resultElement.innerHTML += `
        <h2 class="title">${result.title}</h2>
        <div class="miniature-Yt">${result.miniatureYt}</div>
      `;

      resultContainer.appendChild(resultElement);
    });
  }
}
