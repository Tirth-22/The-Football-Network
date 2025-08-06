const eventData = [
    { 
        id: 1, 
        name: "World Cup 2026 Qualifiers", 
        date: "2024-03-21", 
        location: "Global",
        image: "../images/fifa-world-cup.jpeg" 
    },
    { 
        id: 2, 
        name: "Champions League Final", 
        date: "2024-05-28", 
        location: "London",
        image: "images/champions-league.jpg" 
    },
    { 
        id: 3, 
        name: "Euro 2024", 
        date: "2024-06-14", 
        location: "Germany",
        image: "images/euro.jpg" 
    }
];

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function displayEvents() {
    const container = document.getElementById('events-container');
    
    if (!container) {
        console.error("Events container not found!");
        return;
    }

    container.innerHTML = eventData.map(event => `
        <div class="event-card">
            <div class="event-image">
                <img src="${event.image || 'images/default-event.jpg'}" alt="${event.name}">
            </div>
            <div class="event-details">
                <h3>${event.name}</h3>
                <p class="event-date">📅 ${formatDate(event.date)}</p>
                <p class="event-location">📍 ${event.location}</p>
                <button class="event-button">More Info</button>
            </div>
        </div>
    `).join('');
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', displayEvents);