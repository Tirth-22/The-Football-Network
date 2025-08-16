// dataHandler.js

// ---- Sample JSON Data ----
const eventsJSON = `[
    { "title": "World Cup Qualifier", "date": "2025-09-10", "location": "Paris" },
    { "title": "Champions League Final", "date": "2025-10-02", "location": "London" },
    { "title": "FIFA Awards", "date": "2025-11-18", "location": "Zurich" },
    { "title": "Club World Cup", "date": "2025-12-25", "location": "Doha" },
    { "title": "UEFA Super Cup", "date": "2026-01-15", "location": "Madrid" }
]`;

const playersJSON = `[
    { "name": "Lionel Messi", "country": "Argentina", "club": "Inter Miami", "image": "images/messi.jpg" },
    { "name": "Cristiano Ronaldo", "country": "Portugal", "club": "Al Nassr", "image": "images/ronaldo.jpg" },
    { "name": "Kylian Mbappe", "country": "France", "club": "PSG", "image": "images/mbappe.jpg" },
    { "name": "Erling Haaland", "country": "Norway", "club": "Man City", "image": "images/haaland.jpg" },
    { "name": "Neymar Jr", "country": "Brazil", "club": "Al Hilal", "image": "images/neymar.jpg" }
]`;

// ---- Parsing JSON ----
const events = JSON.parse(eventsJSON);
const players = JSON.parse(playersJSON);

let eventsPage = 0;
let profilesPage = 0;
const itemsPerPage = 3;

function renderEvents(page) {
    const container = document.getElementById("events-container");
    container.innerHTML = "";

    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = events.slice(start, end);

    paginatedData.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>${event.title}</h3>
                          <p>Date: ${event.date}</p>
                          <p>Location: ${event.location}</p>`;
        container.appendChild(card);
    });

    renderPaginationControls(container, page, events.length, changeEventsPage);
}

function renderProfiles(page) {
    const container = document.getElementById("profiles-container");
    container.innerHTML = "";

    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = players.slice(start, end);

    paginatedData.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${player.image}" alt="${player.name}" class="profile-img" />
                          <h3>${player.name}</h3>
                          <p>${player.country}</p>
                          <p>${player.club}</p>`;
        container.appendChild(card);
    });

    renderPaginationControls(container, page, players.length, changeProfilesPage);
}

// ---- Pagination Controls ----
function renderPaginationControls(container, page, totalItems, changePageFn) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Prev";
    prevBtn.disabled = page === 0;
    prevBtn.onclick = () => changePageFn(page - 1);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = page >= totalPages - 1;
    nextBtn.onclick = () => changePageFn(page + 1);

    pagination.appendChild(prevBtn);
    pagination.appendChild(nextBtn);
    container.appendChild(pagination);
}

// ---- Change Page Functions ----
function changeEventsPage(newPage) {
    eventsPage = newPage;
    renderEvents(eventsPage);
}

function changeProfilesPage(newPage) {
    profilesPage = newPage;
    renderProfiles(profilesPage);
}

// ---- Initialize Rendering ----
document.addEventListener("DOMContentLoaded", () => {
    renderEvents(eventsPage);
    renderProfiles(profilesPage);
});
