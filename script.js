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
                "https://pti.unithe.hu:8443/FoxFarie/bereal/bereal_12.jpg",
            ],
            modalId: "bereal-modal",
            modalImgId: "modal-img-bereal",
            captionId: "caption-bereal",
            closeModalId: "close-bereal",
        },
        arts: {
            grid: document.getElementById("arts-gallery-grid"),
            images: [
                "https://pti.unithe.hu:8443/FoxFarie/arts/arts_1.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/arts/arts_2.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/arts/arts_3.jpg",
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
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_4.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_5.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_6.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_7.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_8.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_9.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_10.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_11.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_12.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_13.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_14.jpg",
                "https://pti.unithe.hu:8443/FoxFarie/dates/dates_15.jpg",
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
          <li class="button-container_1">
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

// Az esemény létrehozásához szükséges függvény naptáron kívül!
function createDate(dates_date) {
  const dates_title = prompt("Add meg az esemény címét:");
  const dates_city = prompt("Add meg az esemény városát:");
  const is_active =1;

  // Ellenőrizzük, hogy a felhasználó kitöltötte-e az összes mezőt
  if (!dates_date || !dates_title || !dates_city) {
    alert("Minden mező kitöltése kötelező!");
    return;
  }

  // Küldés az API-nak
  $.ajax({
    url: `${apiBaseUrl}create_date.php`,
    method: "POST",
    data: JSON.stringify({ dates_date, dates_title, dates_city, is_active }),
    contentType: "application/json",
    success: (response) => {
      if (response.success) {
        // Események újratöltése
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

// FullCalendar inicializálás
var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,

    // Események betöltése az API-ból
    events: function (info, successCallback, failureCallback) {
      $.ajax({
        url: `${apiBaseUrl}get_dates_calendar.php`, // Az API endpoint
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          successCallback(data); // Események sikeres betöltése
        },
        error: function (xhr, status, error) {
          failureCallback(error); // Hiba esetén
        },
      });
    },

    // Esemény megjelenítés testreszabása
    eventContent: function (arg) {
      const title = arg.event.title; // Esemény címe
      const city = arg.event.extendedProps.location; // Város neve

      let customHtml = `
      <div class="main-ev-con">
        <div class="event-container">
          <div class="fc-event-title">${title}</div>
          <div class="fc-event-city">${city}</div>
        </div>
      </div>
      `;
      return { html: customHtml };
    },

    // Eseményre kattintás
    eventClick: function (info) {
      const title = info.event.title; // Esemény címe
      const city = info.event.extendedProps.location; // Város neve
      const date = info.event.start;
      fetchWeather(city, date);
    },

    // Dátumra kattintás (új esemény hozzáadása)
    dateClick: function (info) {
      createDate(info.dateStr); // A kiválasztott dátumot automatikusan átadjuk
    },
  });

  // Toggle gomb eseménykezelője
  document.getElementById('toggleViewButton').addEventListener('click', function() {
    // Ellenőrizzük az aktuális nézetet
    if (calendar.view.type === 'dayGridMonth') {
      // Ha hónapnézetben van, váltsunk listanézetre
      calendar.changeView('listMonth');
      this.textContent = 'Naptár nézet'; // Gomb szövege
    } else {
      // Ha listanézetben van, váltsunk hónapnézetre
      calendar.changeView('dayGridMonth');
      this.textContent = 'Lista nézet'; // Gomb szövege
    }
  });

  // Naptár megjelenítése
  calendar.render();



const apiKey = '1fa8ecd4a8970de411d9b8ee4c78c5ca';  // Az OpenWeatherMap API kulcsod

// Időjárás widget elemek (HTML-ben meghatározott elemek)
const weatherWidget = {
  city: document.getElementById('city'),
  temp: document.getElementById('temp'),
  desc: document.getElementById('weather-desc'),
};

// Időjárás adat lekérdezése
function fetchWeather(city, date) {
  // OpenWeatherMap API endpoint
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${apiKey}&lang=hu`;

  // AJAX kérés az időjárás API-ra
  $.ajax({
    url: url,
    method: 'GET',
    success: function(response) {
      // Az API válaszából megtaláljuk a legközelebbi időpontot (UTC)
      const weatherData = response.list.find(item => {
        const forecastDate = new Date(item.dt * 1000); // Eredeti időbélyeg átalakítása dátummá
        return forecastDate.toDateString() === new Date(date).toDateString(); // Hasonlítjuk a dátumokat
      });

      if (weatherData) {
        // Ha megtaláltuk az időpontot, megjelenítjük az adatokat
        weatherWidget.city.textContent = city;
        weatherWidget.temp.textContent = ` ${weatherData.main.temp}°C`;
        weatherWidget.desc.textContent = ` ${weatherData.weather[0].description}`;
        
        // Ikon URL generálása
        const weatherIcon = weatherData.weather[0].icon; // Ikon kód
        const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        // Ikon megjelenítése az img elemben
        const weatherIconImg = document.getElementById('weather-icon');
        weatherIconImg.src = iconUrl; // Beállítjuk az ikon képét
        weatherIconImg.alt = weatherData.weather[0].description; // Alt attribútum az időjárás leírásával
      } else {
        // Ha nem találunk adatot az adott dátumra
        alert("Nincs elérhető időjárási adat ezen a napon.");
      }
    },
    error: function() {
      alert("Hiba történt az időjárás adatainak lekérésekor.");
    }
  });
}


const messages = [
  "Ma egy csodálatos nap vár rád!",
  "Mosolyogj, mert a világ szebb lesz tőle!",
  "Bármi is történik, te erős vagy!",
  "Higgy magadban, mert megérdemled a sikert!",
  "A szeretet, amit adsz, mindig visszatalál hozzád.",
  "Ne feledd, milyen különleges vagy!",
  "Minden lépés közelebb visz az álmaidhoz.",
  "A boldogság benned van, csak engedd szabadon!",
  "Te vagy a kedvenc emberem",
  "Ma is ragyogsz kedvesem",
  "Sose ne, hidd hogy nem szeretlek. Te vagy a mindenem",
  "Legyen olyan csodás a napod, mint nekem (te vagy a napom)",
  "Ha még nem hallottad volna ezerszer, SZERETLEK!!",
  "Te jó isten, milyen gyönyörű lány nyitotta meg ezt az oldalt... :O",
  "A pitagoras tételt biztsan tudom, mint azt, hogy milyen gyönyörú vagy.",
  "Ha lenne még egy életem azt is veled szeretném leélni.",
  "Én tudom, hogy mennyi erőfeszítést teszel nap mint nap. Na és te tudod?",
  "Ma olyan hercegnő fleshekben vagy kedvesem, hogy előkerestem a koronád:👑",
  "Ha nem csillog már a szemem az azért van mert már kiégett a fényedtől",
  "Te vagy az én motorom ami hajt nap mint nap",
  "Nem tudod elképzelni, hogy valójában mennyire szeretlek",
  "A tenyeremen hordoználak legszívesebben egész életemben",
];


const today = new Date().toISOString().split('T')[0];


const savedMessages = JSON.parse(localStorage.getItem('dailyMessages')) || {};

if (!savedMessages[today]) {
  const availableMessages = messages.filter(msg => !Object.values(savedMessages).includes(msg));

  const dailyMessage = availableMessages.length > 0
      ? availableMessages[Math.floor(Math.random() * availableMessages.length)]
      : messages[Math.floor(Math.random() * messages.length)];

  savedMessages[today] = dailyMessage;
  localStorage.setItem('dailyMessages', JSON.stringify(savedMessages));
}

document.getElementById('daily-message').textContent = savedMessages[today];


});