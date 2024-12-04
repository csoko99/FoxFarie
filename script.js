document.addEventListener("DOMContentLoaded", () => {
    const galleries = {
        video: {
            grid: document.getElementById("video-gallery-grid"),
            images: [
                "videok/video_1.mov",
            ],
            modalId: "video-modal",
            modalImgId: "modal-img-video",
            captionId: "caption-video",
            closeModalId: "close-video",
        },
        bereal: {
            grid: document.getElementById("bereal-gallery-grid"),
            images: [
                "bereal/bereal_1.jpg",
                "bereal/bereal_2.jpg",
                "bereal/bereal_3.jpg",
                "bereal/bereal_4.jpg",
                "bereal/bereal_5.jpg",
                "bereal/bereal_6.jpg",
                "bereal/bereal_7.jpg",
                "bereal/bereal_8.jpg",
                "bereal/bereal_9.jpg",
                "bereal/bereal_10.jpg",
                "bereal/bereal_11.jpg",
            ],
            modalId: "bereal-modal",
            modalImgId: "modal-img-bereal",
            captionId: "caption-bereal",
            closeModalId: "close-bereal",
        },
        arts: {
            grid: document.getElementById("arts-gallery-grid"),
            images: [
                "kepek/arts1.jpg",
                "kepek/arts2.jpg",
                "kepek/arts3.jpg",
            ],
            modalId: "arts-modal",
            modalImgId: "modal-img-arts",
            captionId: "caption-arts",
            closeModalId: "close-arts",
        },
        dates: {
            grid: document.getElementById("dates-gallery-grid"),
            images: [
                "dates/dates_1.jpg",
                "dates/dates_2.jpg",
                "dates/dates_3.jpg",
            ],
            modalId: "dates-modal",
            modalImgId: "modal-img-dates",
            captionId: "caption-dates",
            closeModalId: "close-dates",
        },
        bolondos: {
            grid: document.getElementById("bolondos-gallery-grid"),
            images: [
                "bolondos/bolondos_1.jpg",
                "bolondos/bolondos_2.jpg",
                "bolondos/bolondos_3.jpg",
                "bolondos/bolondos_4.jpg",
                "bolondos/bolondos_5.jpg",
                "bolondos/bolondos_6.jpg",
                "bolondos/bolondos_7.jpg",
                "bolondos/bolondos_8.jpg",
                "bolondos/bolondos_9.jpg",
                "bolondos/bolondos_10.jpg",
                "bolondos/bolondos_11.jpg",
                "bolondos/bolondos_12.jpg",
                "bolondos/bolondos_13.jpg",
                "bolondos/bolondos_14.jpg",
                "bolondos/bolondos_15.jpg",
                "bolondos/bolondos_16.jpg",
                "bolondos/bolondos_17.jpg",
                "bolondos/bolondos_18.jpg",
                "bolondos/bolondos_19.jpg",
                "bolondos/bolondos_20.jpg",
                "bolondos/bolondos_21.jpg",
                "bolondos/bolondos_22.jpg",
                "bolondos/bolondos_23.jpg",
                "bolondos/bolondos_24.jpg",
                "bolondos/bolondos_25.jpg",
                "bolondos/bolondos_26.jpg",
                "bolondos/bolondos_27.jpg",
                "bolondos/bolondos_28.jpg",
                "bolondos/bolondos_29.jpg",
                "bolondos/bolondos_30.jpg",
                "bolondos/bolondos_31.jpg",
                "bolondos/bolondos_32.jpg",
                "bolondos/bolondos_33.jpg",
                "bolondos/bolondos_34.jpg",
                "bolondos/bolondos_35.jpg",
            ],
            modalId: "bolondos-modal",
            modalImgId: "modal-img-bolondos",
            captionId: "caption-bolondos",
            closeModalId: "close-bolondos",
        },
        modell: {
            grid: document.getElementById("modell-gallery-grid"),
            images: [
                "modell/model_1.jpg",
                "modell/model_2.jpg",
                "modell/model_3.jpg",
                "modell/model_4.jpg",
                "modell/model_5.jpg",
                "modell/model_6.jpg",
                "modell/model_7.jpg",
                "modell/model_8.jpg",
                "modell/model_9.jpg",
                "modell/model_10.jpg",
                "modell/model_11.jpg",
                "modell/model_12.jpg",
                "modell/model_13.jpg",
                "modell/model_14.jpg",
                "modell/model_15.jpg",
                "modell/model_16.jpg",
                "modell/model_17.jpg",
                "modell/model_18.jpg",
                "modell/model_19.jpg",
                "modell/model_20.jpg",
                "modell/model_21.jpg",
                "modell/model_22.jpg",
                "modell/model_23.jpg",
                "modell/model_24.jpg",
                "modell/model_25.jpg",
                "modell/model_26.jpg",
                "modell/model_27.jpg",
                "modell/model_28.jpg",
                "modell/model_29.jpg",
                "modell/model_30.jpg",
            ],
            modalId: "modell-modal",
            modalImgId: "modal-img-modell",
            captionId: "caption-modell",
            closeModalId: "close-modell",
        },
    };

    const buttons = document.querySelectorAll(".gallery-button");
    buttons.forEach(button => {
    button.addEventListener("click", () => {
    const galleryName = button.getAttribute("data-gallery");
    showGallery(galleryName);
  });
});

    // Kiválasztott galéria megjelenítése és a többi elrejtése
    function showGallery(galleryName) {
      // Minden galéria elrejtése
      Object.keys(galleries).forEach(name => {
          galleries[name].grid.style.display = "none";
      });
  
      // Kiválasztott galéria megjelenítése
      const gallery = galleries[galleryName];
      if (!gallery) return;
      gallery.grid.innerHTML = ''; // Töröljük a galéria előző tartalmát
      gallery.images.forEach(src => {
          const imgElement = document.createElement("img");
          imgElement.src = src;
          imgElement.alt = `${galleryName} kép`;
          imgElement.addEventListener("click", () => openModal(galleryName, src, imgElement.alt));
          gallery.grid.appendChild(imgElement);
      });
      gallery.grid.style.display = "grid"; // A kiválasztott galéria láthatóvá tétele
  }
  

    // Képek hozzáadása és eseménykezelők
    Object.keys(galleries).forEach(section => {
        const gallery = galleries[section];
        gallery.images.forEach((src, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = src;
            imgElement.alt = `${section} Kép ${index + 1}`;
            imgElement.addEventListener("click", () => openModal(src, imgElement.alt));
            gallery.grid.appendChild(imgElement);
        });
    });

    function openModal(galleryName, src, caption) {
      const gallery = galleries[galleryName];
      if (!gallery) return; // Ellenőrzés, ha nincs megfelelő galéria
      const modal = document.getElementById(gallery.modalId);
      const modalImg = document.getElementById(gallery.modalImgId);
      const captionText = document.getElementById(gallery.captionId);
  
      modal.style.display = "block";
      modalImg.src = src;
      captionText.textContent = caption || "";
  
      // Bezárás esemény
      const closeModal = document.getElementById(gallery.closeModalId);
      closeModal.onclick = () => {
          modal.style.display = "none";
      };
  
      // A modális ablak kattintásra való bezárása
      modal.addEventListener("click", (e) => {
          if (e.target === modal) {
              modal.style.display = "none";
          }
      });
  }
      
      // Képre kattintva modális megnyitása
      document.querySelectorAll(".gallery-grid img").forEach(img => {
        img.addEventListener("click", () => {
          const galleryName = img.closest(".gallery-grid").id.split("-")[0];
          openModal(galleryName, img.src, img.alt);
        });
      });
      
    
      document.addEventListener("keydown", (e) => {
        Object.values(galleries).forEach(gallery => {
            const modal = document.getElementById(gallery.modalId);
            if (modal.style.display === "block") {
                let currentIndex = gallery.images.findIndex(src => src === document.getElementById(gallery.modalImgId).src);
    
                if (e.key === "ArrowRight") {
                    currentIndex = (currentIndex + 1) % gallery.images.length;
                    document.getElementById(gallery.modalImgId).src = gallery.images[currentIndex];
                } else if (e.key === "ArrowLeft") {
                    currentIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
                    document.getElementById(gallery.modalImgId).src = gallery.images[currentIndex];
                }
            }
        });
    });    
});

// Kezdődátum: 2024. június 17.
const startDate = new Date('2024-06-17T00:00:00');

// Számláló frissítése
function updateCounter() {
  const now = new Date(); // Jelenlegi dátum

  // Évek, hónapok és napok kiszámítása
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  // Ha a napok negatívak, visszalépünk egy hónapot
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Ha a hónapok negatívak, visszalépünk egy évet
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Órák, percek, másodpercek kiszámítása
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Idő formázása
  let formattedTime = '<ul>';
  if (years > 0) formattedTime += `<li>${years} év</li>`;
  if (months > 0) formattedTime += `<li>${months} hónap</li>`;
  if (days > 0) formattedTime += `<li>${days} nap</li>`;
  if (hours > 0) formattedTime += `<li>${hours} óra</li>`;
  if (minutes > 0) formattedTime += `<li>${minutes} perc</li>`;
  if (seconds > 0) formattedTime += `<li>${seconds} másodperc</li>`;
  formattedTime += '</ul>';

  // Idő kiírása a DOM-ba
  document.getElementById('time-elapsed').innerHTML = formattedTime;
}

// Idő frissítése másodpercenként
setInterval(updateCounter, 1000);

// Alkalmazás indítása
updateCounter();


// Helyi tárolóból betöltött adatbázisok
let movieDatabase = JSON.parse(localStorage.getItem('movieDatabase')) || [];
let activityDatabase = JSON.parse(localStorage.getItem('activityDatabase')) || [];

// Lista betöltése az adatbázisból
function loadMovieItems() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Törli az aktuális elemeket
    movieDatabase.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('button-container_1');
      li.classList.add('button-container');
      li.innerHTML = `
        <span>${item.text} (S${item.season}E${item.episode})</span>
        <button class="decrease-season-button">- Évad</button>
        <button class="increase-season-button">+ Évad</button>
        <button class="decrease-episode-button">- Rész</button>
        <button class="increase-episode-button">+ Rész</button>
        <button class="delete-button">Törlés</button>
      `;
  
      // Évad növelése
      li.querySelector('.increase-season-button').addEventListener('click', () => {
        item.season++;
        saveMovieDatabase();
        loadMovieItems();
      });
  
      // Évad csökkentése
      li.querySelector('.decrease-season-button').addEventListener('click', () => {
        if (item.season > 1) item.season--;
        saveMovieDatabase();
        loadMovieItems();
      });
  
      // Epizód növelése
      li.querySelector('.increase-episode-button').addEventListener('click', () => {
        item.episode++;
        saveMovieDatabase();
        loadMovieItems();
      });
  
      // Epizód csökkentése
      li.querySelector('.decrease-episode-button').addEventListener('click', () => {
        if (item.episode > 1) item.episode--;
        saveMovieDatabase();
        loadMovieItems();
      });
  
      // Törlés gomb eseménykezelője
      li.querySelector('.delete-button').addEventListener('click', () => {
        deleteMovieItem(item.id);
      });
  
      movieList.appendChild(li);
    });
  }

function loadActivityItems() {
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = ''; // Törli az aktuális elemeket
  activityDatabase.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('button-container_1');
    li.textContent = item.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Törlés';
    deleteButton.onclick = () => deleteActivityItem(item.id);

    li.appendChild(deleteButton);
    activityList.appendChild(li);
  });
}

// Új film/sorozat hozzáadása
function addMovieItem() {
    const title = prompt("Add meg a film/sorozat címét:");
    if (!title) return;
  
    const season = parseInt(prompt("Add meg az évad számát (pl. 1):"), 10) || 1;
    const episode = parseInt(prompt("Add meg az epizód számát (pl. 1):"), 10) || 1;
  
    const newItem = {
      id: movieDatabase.length ? movieDatabase[movieDatabase.length - 1].id + 1 : 1,
      text: title,
      season: season,
      episode: episode,
    };
  
    movieDatabase.push(newItem);
    saveMovieDatabase();
    loadMovieItems();
  }
  

function addActivityItem() {
  const newItemText = prompt("Add meg az új programot:");
  if (newItemText) {
    const newItem = {
      id: activityDatabase.length ? activityDatabase[activityDatabase.length - 1].id + 1 : 1,
      text: newItemText,
    };
    activityDatabase.push(newItem);
    saveActivityDatabase();
    loadActivityItems();
  }
}

// Film/sorozat szerkesztése
function editMovieItem(id) {
    const index = movieDatabase.findIndex(item => item.id === id);
    if (index === -1) return;
  
    const item = movieDatabase[index];
    const newTitle = prompt("Szerkeszd a címet:", item.text) || item.text;
    const newSeason = parseInt(prompt("Szerkeszd az évad számát:", item.season), 10) || item.season;
    const newEpisode = parseInt(prompt("Szerkeszd az epizód számát:", item.episode), 10) || item.episode;
  
    movieDatabase[index] = { ...item, text: newTitle, season: newSeason, episode: newEpisode };
    saveMovieDatabase();
    loadMovieItems();
  }

// Film/sorozat vagy aktivitás törlése
function deleteMovieItem(id) {
    const index = movieDatabase.findIndex(item => item.id === id);
    if (index !== -1) {
      movieDatabase.splice(index, 1);
      saveMovieDatabase();
      loadMovieItems();
    }
  }

function deleteActivityItem(id) {
  const index = activityDatabase.findIndex(item => item.id === id);
  if (index !== -1) {
    activityDatabase.splice(index, 1);
    saveActivityDatabase();
    loadActivityItems();
  }
}

// Adatbázisok mentése a helyi tárolóba
function saveMovieDatabase() {
    localStorage.setItem('movieDatabase', JSON.stringify(movieDatabase));
  }

function saveActivityDatabase() {
  localStorage.setItem('activityDatabase', JSON.stringify(activityDatabase));
}

// Gomb eseménykezelők hozzáadása
document.getElementById('add-movie-button').addEventListener('click', addMovieItem);
document.getElementById('add-activity-button').addEventListener('click', addActivityItem);

// Alkalmazás inicializálása
loadMovieItems();
loadActivityItems();

const apiKey = '1fa8ecd4a8970de411d9b8ee4c78c5ca';
const weatherWidget = {
  city: document.getElementById('city'),
  temp: document.getElementById('temp'),
  desc: document.getElementById('weather-desc'),
};

// Naptár generálása
const today = new Date();
const calendar = document.getElementById('calendar');

function generateCalendar() {
  let calendarHTML = '<table border="1"><tr>';
  for (let day = 1; day <= 31; day++) {
    calendarHTML += `<td data-day="${day}">${day}</td>`;
    if (day % 7 === 0) calendarHTML += '</tr><tr>';
  }
  calendarHTML += '</tr></table>';
  calendar.innerHTML = `<h3>Naptár (${today.getMonth() + 1}. hónap)</h3>` + calendarHTML;
}

generateCalendar();

// Események kezelése
const events = [];

function addEvent(event) {
  event.preventDefault();
  const date = document.getElementById('event-date').value;
  const location = document.getElementById('event-location').value;

  if (date && location) {
    events.push({ date, location });
    updateEventList();
    fetchWeather(location, new Date(date));
  }
}

function updateEventList() {
  const eventList = document.querySelector('#event-list ul');
  eventList.innerHTML = '';
  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.textContent = `Dátum: ${event.date}, Hely: ${event.location}`;
    li.onclick = () => fetchWeather(event.location, new Date(event.date));
    eventList.appendChild(li);
  });
}

// Időjárás lekérdezés
function fetchWeather(location, date) {
  const isFuture = date > new Date();
  const endpoint = isFuture
    ? `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`
    : `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      if (isFuture) {
        const futureWeather = data.list.find(entry => {
          const weatherDate = new Date(entry.dt * 1000);
          return (
            weatherDate.getDate() === date.getDate() &&
            weatherDate.getMonth() === date.getMonth() &&
            weatherDate.getFullYear() === date.getFullYear()
          );
        });

        if (futureWeather) {
          updateWeatherWidget(location, futureWeather.main.temp, futureWeather.weather[0].description);
        } else {
          alert('Nem található előrejelzés erre a dátumra.');
        }
      } else {
        updateWeatherWidget(location, data.main.temp, data.weather[0].description);
      }
    })
    .catch(error => console.error('Hiba az időjárás adatainak lekérésekor:', error));
}

function updateWeatherWidget(city, temp, desc) {
  weatherWidget.city.textContent = city;
  weatherWidget.temp.textContent = Math.round(temp);
  weatherWidget.desc.textContent = desc;
}

// Esemény form kezelése
document.getElementById('event-form').addEventListener('submit', addEvent);
