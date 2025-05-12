const events = [
    { id: "1", sport: "Jalkapallo", name: "Jalkapallo: HJK vs Inter", date: "15.5.2025", location: "Helsinki", description: "Kauden avausottelu HJK:n kotikentällä.", url: "https://www.hjk.fi" },
    { id: "2", sport: "Jääkiekko", name: "Jääkiekko: HIFK vs Kärpät", date: "20.5.2025", location: "Helsinki", description: "Kiihkeä paikallisottelu jäähallissa.", url: "https://www.hifk.fi" },
    { id: "3", sport: "Koripallo", name: "Koripallo: Espoo Basket vs Vantaa Stars", date: "18.5.2025", location: "Espoo", description: "Paikallinen korismatsi.", url: "https://www.espoobasket.fi" },
    { id: "4", sport: "Jalkapallo", name: "Jalkapallo: PK-35 vs Gnistan", date: "22.6.2025", location: "Vantaa", description: "Kiihkeä derby Vantaalla.", url: "https://www.pk-35.fi" }
];

let currentSport = 'all';
let currentMonth = 'all';

function displayEvents() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    const filteredEvents = events.filter(event => {
        const eventMonth = parseInt(event.date.split('.')[1]);
        const sportMatch = currentSport === 'all' || event.sport === currentSport;
        const monthMatch = currentMonth === 'all' || eventMonth === parseInt(currentMonth);
        return sportMatch && monthMatch;
    });

    if (filteredEvents.length === 0) {
        eventList.innerHTML = `<div class="col-12"><p class="text-muted">Ei tapahtumia valitulla suodatuksella.</p></div>`;
        return;
    }

    filteredEvents.forEach(event => {
        eventList.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="event-item">
                    <a href="event.html?id=${event.id}">
                        <h5>${event.name}</h5>
                        <p><strong>${event.date}</strong> – ${event.location}</p>
                    </a>
                </div>
            </div>
        `;
    });
}

function setSport(sport) {
    currentSport = sport;
    displayEvents();
}

function setMonth(month) {
    currentMonth = month;
    displayEvents();
}

if (document.getElementById("eventList")) {
    displayEvents();
}

// Tapahtumasivu
if (document.getElementById("eventDetails")) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
    const event = events.find(e => e.id === eventId);

    if (event) {
        document.getElementById("eventDetails").innerHTML = `
            <h2>${event.name}</h2>
            <p><strong>Päivämäärä:</strong> ${event.date}</p>
            <p><strong>Paikka:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <a href="${event.url}" target="_blank" class="btn btn-primary">Lisätietoja</a>
        `;
    } else {
        document.getElementById("eventDetails").innerHTML = "<p>Tapahtumaa ei löydy.</p>";
    }
}

