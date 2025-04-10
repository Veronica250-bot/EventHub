const events = [
    { id: "1", sport: "Jalkapallo", name: "Jalkapallo: HJK vs Inter", date: "15.5.2025", location: "Helsinki", description: "Kauden avausottelu HJK:n kotikentällä.", url: "https://www.hjk.fi" },
    { id: "2", sport: "Jääkiekko", name: "Jääkiekko: HIFK vs Kärpät", date: "20.5.2025", location: "Helsinki", description: "Kiihkeä paikallisottelu jäähallissa.", url: "https://www.hifk.fi" },
    { id: "3", sport: "Koripallo", name: "Koripallo: Espoo Basket vs Vantaa Stars", date: "18.5.2025", location: "Espoo", description: "Paikallinen korismatsi.", url: "https://www.espoobasket.fi" },
    { id: "4", sport: "Jalkapallo", name: "Jalkapallo: PK-35 vs Gnistan", date: "22.5.2025", location: "Vantaa", description: "Kiihkeä derby Vantaalla.", url: "https://www.pk-35.fi" }
];

// Etusivun tapahtumalista ja suodatus
if (document.getElementById("eventList")) {
    function displayEvents(filter) {
        const eventList = document.getElementById("eventList");
        eventList.innerHTML = "";
        const filteredEvents = filter === "all" ? events : events.filter(event => event.sport === filter);
        
        filteredEvents.forEach(event => {
            eventList.innerHTML += `
                <div class="event-item list-group-item">
                    <a href="event.html?id=${event.id}">${event.name} – ${event.date}, ${event.location}</a>
                </div>
            `;
        });
    }
    displayEvents("all"); // Näytä kaikki oletuksena
}

function filterEvents(sport) {
    displayEvents(sport);
}

// Lisätietosivu
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
