document.addEventListener("DOMContentLoaded", () => {
  const apiBaseUrl = "https://pti.unithe.hu:8443/FoxFarie/api/";

    const galleries = {
        video: {
            grid: document.getElementById("video-gallery-grid"),
            images: [
                "https://pti.unithe.hu:8443/FoxFarie/videok/video_1.mov",
            ],
            modalId: "video-modal",
            modalImgId: "modal-img-video",
            captionId: "caption-video",
            closeModalId: "close-video",
        },
        bereal: {
            grid: document.getElementById("bereal-gallery-grid"),
            images: [
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_1.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_2.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_3.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_4.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_5.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_6.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_7.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_8.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_9.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_10.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_11.jpg",
            ],
            modalId: "bereal-modal",
            modalImgId: "modal-img-bereal",
            captionId: "caption-bereal",
            closeModalId: "close-bereal",
        },
        arts: {
            grid: document.getElementById("arts-gallery-grid"),
            images: [
               /* "https://pti.unithe.hu:8443/FoxFarie/kepek/arts1.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/kepek/arts2.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/kepek/arts3.jpg",*/
            ],
            modalId: "arts-modal",
            modalImgId: "modal-img-arts",
            captionId: "caption-arts",
            closeModalId: "close-arts",
        },
        dates: {
            grid: document.getElementById("dates-gallery-grid"),
            images: [
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_1.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_2.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_3.jpg",
            ],
            modalId: "dates-modal",
            modalImgId: "modal-img-dates",
            captionId: "caption-dates",
            closeModalId: "close-dates",
        },
        bolondos: {
            grid: document.getElementById("bolondos-gallery-grid"),
            images: [
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_1.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_2.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_3.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_4.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_5.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_6.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_7.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_8.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_9.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_10.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_11.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_12.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_13.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_14.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_15.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_16.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_17.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_18.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_19.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_20.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_21.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_22.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_23.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_24.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_25.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_26.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_27.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_28.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_29.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_30.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_31.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_32.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_33.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_34.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/bolondos/bolondos_35.jpg",
            ],
            modalId: "bolondos-modal",
            modalImgId: "modal-img-bolondos",
            captionId: "caption-bolondos",
            closeModalId: "close-bolondos",
        },
        modell: {
            grid: document.getElementById("modell-gallery-grid"),
            images: [
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_1.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_2.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_3.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_4.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_5.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_6.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_7.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_8.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_9.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_10.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_11.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_12.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_13.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_14.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_15.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_16.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_17.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_18.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_19.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_20.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_21.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_22.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_23.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_24.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_25.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_26.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_27.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_28.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_29.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/modell/model_30.jpg",
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
    
    











// Idő számláló
const startDate = new Date("2024-06-17T00:00:00");

function updateCounter() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const formattedTime = `
    <ul>
      ${years > 0 ? `<li>${years} év</li>` : ""}
      ${months > 0 ? `<li>${months} hónap</li>` : ""}
      ${days > 0 ? `<li>${days} nap</li>` : ""}
    </ul>`;
  document.getElementById("time-elapsed").innerHTML = formattedTime;
}

setInterval(updateCounter, 1000);
updateCounter();

// Film/sorozat kezelése
function loadMovieItems() {
  $.ajax({
    url: `${apiBaseUrl}get_movie.php`,
    method: "GET",
    dataType: "json",
    success: (movies) => {
      const movieList = $("#movie-list");
      movieList.empty();
      movies.forEach((movie) => {
        const li = $(`
          <li class="button-container button-container_1">
            <span>${movie.title} (S${movie.season}E${movie.episode})</span>
            <button class="increase-season">+ Évad</button>
            <button class="decrease-season">- Évad</button>
            <button class="increase-episode">+ Rész</button>
            <button class="decrease-episode">- Rész</button>
            <button class="delete">Törlés</button>
          </li>
        `);

        li.find(".increase-season").on("click", () =>
          updateMovie(movie.id, Number(movie.season) + 1, Number(movie.episode))
        );
        li.find(".decrease-season").on("click", () =>
          updateMovie(movie.id, Math.max(Number(movie.season) - 1, 1), Number(movie.episode))
        );
        li.find(".increase-episode").on("click", () =>
          updateMovie(movie.id, Number(movie.season), Number(movie.episode) + 1)
        );
        li.find(".decrease-episode").on("click", () =>
          updateMovie(movie.id, Number(movie.season), Math.max(Number(movie.episode) - 1, 1))
        );
        li.find(".delete").on("click", () => deleteMovie(movie.id));

        movieList.append(li);
      });
    },
  });
}

function updateMovie(id, season, episode) {
  const data = { id };
  if (season !== undefined) data.season = season;
  if (episode !== undefined) data.episode = episode;

  $.ajax({
    url: `${apiBaseUrl}update_movie.php`,
    method: "PUT",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: loadMovieItems,
    error: (jqXHR, textStatus, errorThrown) => {
      console.error("Hiba a film frissítése közben:", textStatus, errorThrown);
      alert("Nem sikerült frissíteni a filmet. Ellenőrizd az API-t.");
    },
  });
}


function deleteMovie(movieId) {
  if (!confirm("Biztosan törölni szeretnéd ezt az elemet?")) return;

  $.ajax({
    url: `${apiBaseUrl}delete_movie.php`,
    method: "DELETE",
    data: JSON.stringify({ id: movieId }),
    contentType: "application/json",
    success: function (response) {
      console.log("Sikeres válasz:", response);
      if (response.success) {
        alert("Film sikeresen törölve!");
        loadMovieItems(); // Frissíti a listát
      } else {
        alert("Hiba: " + response.error);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("AJAX hiba:", textStatus, errorThrown);
      alert("Nem sikerült törölni a filmet. Ellenőrizd az API-t.");
    },
  });
}


function addMovie() {
  const title = prompt("Cím:");
  if (!title) return;

  const season = parseInt(prompt("Évad:"), 10) || 1;
  const episode = parseInt(prompt("Epizód:"), 10) || 1;
  const is_active = 1; // Alapértelmezett aktív állapot

  $.ajax({
    url: `${apiBaseUrl}create_movie.php`,
    method: "POST",
    data: JSON.stringify({ title, season, episode, is_active }),
    contentType: "application/json",
    success: function (response) {
      console.log("Sikeres válasz:", response);
      if (response.success) {
        loadMovieItems();
      } else {
        alert("Hiba: " + response.error);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("AJAX hiba:", textStatus, errorThrown);
      alert("Nem sikerült hozzáadni a filmet. Ellenőrizd az API-t.");
    },
  });
}


$("#add-movie-button").on("click", addMovie);


loadMovieItems();


function loadActivities() {
  // AJAX hívás a get_activities.php végponthoz
  $.ajax({
    url: `${apiBaseUrl}get_activities.php`, // Az API végpont URL-je
    method: "GET",
    dataType: "json", // JSON formátumban várjuk az adatokat
    success: (response) => {
      const activityList = $("#activity-list"); // A listaelem kiválasztása
      activityList.empty(); // Lista ürítése

      if (response.success && response.data.length > 0) {
        // Bejárjuk az aktivitásokat és hozzáadjuk őket a listához
        response.data.forEach((activity) => {
          const listItem = $(`<li class="button-container_1"><span>${activity.activity}</span> <button class="delete_1">Törlés</button></li>`);
          listItem.find(".delete_1").on("click", () => deleteActivity(activity.id));
          activityList.append(listItem); // Elem hozzáadása a listához
        });
      } else {
        // Ha nincs adat, megjelenítjük az üres üzenetet
        activityList.append("<li>Nincs elérhető aktivitás.</li>");
      }
    },
    error: () => {
      // Hiba esetén értesítjük a felhasználót
      alert("Hiba történt az aktivitások betöltése közben!");
    },
  });
}

function addActivitie() {
  const activity = prompt("Add meg az aktivitás nevét:");
  if (!activity) return;

  $.ajax({
    url: `${apiBaseUrl}create_activity.php`,
    method: "POST",
    data: JSON.stringify({ activity }),
    contentType: "application/json",
    success: (response) => {
      if (response.success) {
        alert("Aktivitás sikeresen hozzáadva!");
        loadActivities(); 
      } else {
        alert("Hiba történt: " + response.error);
      }
    },
    error: () => {
      alert("Hiba történt az aktivitás létrehozása közben.");
    },
  });
}
$("#add-activity-button").on("click", addActivitie);

function deleteActivity(id) {
  if (!confirm("Biztosan törölni szeretnéd ezt az aktivitást?")) return;

  $.ajax({
    url: `${apiBaseUrl}delete_activity.php`,
    method: "POST",
    data: JSON.stringify({ id }),
    contentType: "application/json",
    success: (response) => {
      if (response.success) {
        alert("Aktivitás sikeresen törölve!");
        loadActivities(); // Újratöltjük az aktivitásokat
      } else {
        alert("Hiba történt: " + response.error);
      }
    },
    error: () => {
      alert("Hiba történt az aktivitás törlése közben.");
    },
  });
}
loadActivities();

// Betöltés és megjelenítés az #activity-list helyett #dates-list-ben
function loadDates() {
  $.ajax({
    url: `${apiBaseUrl}get_dates_list.php`, // A get_dates.php fájlt hívjuk meg
    method: "GET",
    dataType: "json",
    success: (dates) => {
      const datesList = $("#dates-list"); // Az ID #dates-list legyen
      datesList.empty(); // Az elemek törlése a lista frissítése előtt

      dates.forEach((date) => {
        const li = $(`
          <li class="button-container button-container_1">
            <span>${date.dates_date} - ${date.dates_title} (${date.dates_city})</span>
            <button class="delete">Törlés</button>
          </li>
        `);

        li.find(".delete").on("click", () => deleteDate(date.id));
        datesList.append(li); // Az elemet hozzáadjuk a listához
      });
    },
    error: () => {
      alert("Hiba történt a dátumok betöltése közben.");
    },
  });
}

// Új dátum létrehozása
// Új dátum létrehozása
function createDate() {
  const dates_date = prompt("Adj meg egy dátumot (YYYY-MM-DD formátumban):");
  const dates_title = prompt("Add meg az esemény címét:");
  const dates_city = prompt("Add meg az esemény városát:");
  const is_active = confirm("Az esemény aktív?") ? 1 : 0;

  if (!dates_date || !dates_title || !dates_city) {
    alert("Minden mező kitöltése kötelező!");
    return;
  }

  $.ajax({
    url: `${apiBaseUrl}create_date.php`, // A create_date.php-t hívjuk meg
    method: "POST",
    data: JSON.stringify({ dates_date, dates_title, dates_city, is_active }),
    contentType: "application/json",
    success: (response) => {
      if (response.success) {
        alert("Esemény sikeresen hozzáadva!");
        // Frissítjük a naptár eseményeit
        loadDates();
        calendar.refetchEvents(); 
      } else {
        alert("Hiba: " + response.error);
      }
    },
    error: () => {
      alert("Hiba történt az esemény létrehozása közben.");
    },
  });
}

// Dátum törlése
function deleteDate(id) {
  if (!confirm("Biztosan törölni szeretnéd ezt a dátumot?")) return;

  $.ajax({
    url: `${apiBaseUrl}delete_dates.php`, // A delete_date.php-t hívjuk meg
    method: "POST",
    data: JSON.stringify({ id }),
    contentType: "application/json",
    success: (response) => {
      if (response.success) {
        alert("Dátum sikeresen törölve!");
        // Frissítjük a naptár eseményeit
        loadDates();
        calendar.refetchEvents();
      } else {
        alert("Hiba: " + response.error);
      }
    },
    error: () => {
      alert("Hiba történt a dátum törlése közben.");
    },
  });
}

// Script inicializálása
$(document).ready(() => {
  loadDates(); // Dátumok betöltése oldal betöltésekor

  $("#create-date-btn").on("click", () => {
    createDate(); // Új dátum hozzáadása a gombnyomáskor
  });
});

var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  selectable: true,
  
  // Események betöltése az API-ból
  events: function(info, successCallback, failureCallback) {
    $.ajax({
      url: `${apiBaseUrl}get_dates_calendar.php`,  // Az API endpoint
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        successCallback(data); // Események sikeres betöltése
      },
      error: function(xhr, status, error) {
        failureCallback(error); // Hiba esetén
      }
    });
  },
  
  // Egyéb opciók, pl. kattintásra esemény hozzáadása
  dateClick: function(info) {
    alert('Kattintottál: ' + info.dateStr);
  }
});

calendar.render();



const apiKey = '1fa8ecd4a8970de411d9b8ee4c78c5ca';
const weatherWidget = {
  city: document.getElementById('city'),
  temp: document.getElementById('temp'),
  desc: document.getElementById('weather-desc'),
};


// Időjárás lekérdezés
/*function fetchWeather(location, date) {
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
document.getElementById('event-form').addEventListener('submit', addEvent);*/
});