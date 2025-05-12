// Tapahtumadata päivitetyillä tiedoilla
const events = [
    { 
        id: "1", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs Inter", 
        date: "15.5.2025", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kauden avausottelu HJK:n kotikentällä. Luvassa tiukka kamppailu!", 
        url: "https://www.hjk.fi" 
    },
    { 
        id: "2", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: HIFK vs Kärpät", 
        date: "20.5.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "35€", 
        description: "Kiihkeä paikallisottelu jäähallissa. Älä missaa tätä klassikkoa!", 
        url: "https://www.hifk.fi" 
    },
    { 
        id: "3", 
        sport: "Lentopallo", 
        name: "Lentopallo: Vuosaaren Viikingit vs Korson Veto", 
        date: "18.5.2025", 
        location: "Helsinki", 
        venue: "Kallahden palloiluhalli", 
        ticketPrice: "15€", 
        description: "Paikallinen lentopalloderby Kallahden palloiluhallissa.", 
        url: "https://www.lentopallo.fi" 
    },
    { 
        id: "4", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: PK-35 vs Gnistan", 
        date: "22.5.2025", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Kiihkeä derby Vantaalla. Tule kannustamaan!", 
        url: "https://www.pk-35.fi" 
    },
    { 
        id: "5", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs KuPS", 
        date: "10.6.2025", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kesäkauden huippuottelu HJK:n kotikentällä.", 
        url: "https://www.hjk.fi" 
    },
    { 
        id: "6", 
        sport: "Lentopallo", 
        name: "Lentopallo: Helsinki Volley vs Vantaan Lentis", 
        date: "12.6.2025", 
        location: "Helsinki", 
        venue: "Myllypuron halli", 
        ticketPrice: "10€", 
        description: "Kesäkauden lentopalloturnaus Myllypuron hallissa.", 
        url: "https://www.lentopallo.fi" 
    },
    { 
        id: "7", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs Tappara", 
        date: "15.9.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Syyskauden avaus. Tule nauttimaan kiekkoviihteestä!", 
        url: "https://www.jokerit.fi" 
    },
    { 
        id: "8", 
        sport: "Lentopallo", 
        name: "Lentopallo: Beach Club Tournament", 
        date: "25.9.2025", 
        location: "Helsinki", 
        venue: "Biitsi, Pasila", 
        ticketPrice: "5€", 
        description: "Rantalentopalloturnaus Biitsillä, Pasilassa. Kesäinen tunnelma!", 
        url: "https://www.biitsi.fi" 
    },
    { 
        id: "9", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: Gnistan vs FC Lahti", 
        date: "5.10.2025", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Kauden loppuhuipennus Vantaalla.", 
        url: "https://www.gnistan.fi" 
    },
    { 
        id: "10", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: HIFK vs Ilves", 
        date: "20.11.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "35€", 
        description: "Talven klassikko. Luvassa jännittävä ottelu!", 
        url: "https://www.hifk.fi" 
    },
    { 
        id: "11", 
        sport: "Lentopallo", 
        name: "Lentopallo: Korson Veto vs Rekolan Raikas", 
        date: "15.12.2025", 
        location: "Vantaa", 
        venue: "Kaivokselan koulu", 
        ticketPrice: "10€", 
        description: "Joulukuun lentopalloturnaus Kaivokselan koululla.", 
        url: "https://www.lentopallo.fi" 
    },
    { 
        id: "12", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs SJK", 
        date: "15.7.2025", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kesän huippuottelu HJK:n kotikentällä.", 
        url: "https://www.hjk.fi" 
    },
    { 
        id: "13", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Kärpät vs TPS", 
        date: "10.10.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Vieraspeli Helsingissä. Tule kannustamaan!", 
        url: "https://www.karpat.fi" 
    },
    { 
        id: "14", 
        sport: "Lentopallo", 
        name: "Lentopallo: PKS Höntsäpelit Turnaus", 
        date: "5.11.2025", 
        location: "Vantaa", 
        venue: "Länsi-Vantaa", 
        ticketPrice: "5€", 
        description: "Harrastelijoiden lentopalloturnaus Länsi-Vantaalla.", 
        url: "https://www.lentopallo.fi" 
    },
    { 
        id: "15", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: Gnistan vs VPS", 
        date: "20.11.2025", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Syyskauden päätös Vantaalla.", 
        url: "https://www.gnistan.fi" 
    },
    { 
        id: "16", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs Lukko", 
        date: "25.12.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Joulun peli. Tule nauttimaan kiekkoviihteestä!", 
        url: "https://www.jokerit.fi" 
    }
];

// Etusivun tapahtumalista ja suodatus
let currentSport = "all";

function getCurrentSport() {
    return currentSport;
}

// Näytä tapahtumat etusivulla
if (document.getElementById("eventList")) {
    function displayEvents(sportFilter, monthFilter) {
        const eventList = document.getElementById("eventList");
        eventList.innerHTML = "";
        let filteredEvents = events;

        currentSport = sportFilter;

        // Suodata urheilulajin mukaan
        if (sportFilter !== "all") {
            filteredEvents = filteredEvents.filter(event => event.sport === sportFilter);
        }

        // Suodata kuukauden mukaan
        if (monthFilter !== "all") {
            filteredEvents = filteredEvents.filter(event => event.date.includes(monthFilter));
        }

        // Näytä tapahtumakortit
        filteredEvents.forEach(event => {
            const eventCard = `
                <div class="event-item">
                    <a href="event.html?id=${event.id}&sport=${sportFilter}&month=${monthFilter}" class="text-decoration-none text-dark">
                        <h3>${event.name}</h3>
                        <p><strong>Päivämäärä:</strong> ${event.date}</p>
                        <p><strong>Paikka:</strong> ${event.venue}, ${event.location}</p>
                        <p><strong>Lipun hinta:</strong> ${event.ticketPrice}</p>
                        <p><strong>Kuvaus:</strong> ${event.description}</p>
                    </a>
                </div>
            `;
            eventList.innerHTML += eventCard;
        });

        // Päivitä URL-parametrit
        const newUrl = `${window.location.pathname}?sport=${sportFilter}&month=${monthFilter}`;
        window.history.pushState({}, '', newUrl);
    }

    // Lue URL-parametrit sivun latautuessa
    const urlParams = new URLSearchParams(window.location.search);
    const initialSport = urlParams.get("sport") || "all";
    const initialMonth = urlParams.get("month") || "all";
    currentSport = initialSport;

    // Aseta kuukausivalikko
    const monthFilter = document.getElementById("monthFilter");
    monthFilter.value = initialMonth;

    // Näytä tapahtumat
    displayEvents(initialSport, initialMonth);
}

// Suodatustoiminto
function filterEvents(sport, month) {
    displayEvents(sport, month);
}

// Tapahtuman lisätietosivu
if (document.getElementById("eventDetails")) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
    const sportFilter = urlParams.get("sport") || "all";
    const monthFilter = urlParams.get("month") || "all";
    const event = events.find(e => e.id === eventId);

    if (event) {
        document.getElementById("eventDetails").innerHTML = `
            <div class="card-body">
                <h2>${event.name}</h2>
                <p><strong>Päivämäärä:</strong> ${event.date}</p>
                <p><strong>Paikka:</strong> ${event.venue}, ${event.location}</p>
                <p><strong>Lipun hinta:</strong> ${event.ticketPrice}</p>
                <p><strong>Kuvaus:</strong> ${event.description}</p>
                <a href="${event.url}" target="_blank" class="btn btn-primary">Lisätietoja</a>
            </div>
        `;
        document.getElementById("backLink").href = `index.html?sport=${sportFilter}&month=${monthFilter}`;
    } else {
        document.getElementById("eventDetails").innerHTML = `
            <div class="card-body">
                <p>Tapahtumaa ei löydy. <a href="index.html">Palaa etusivulle</a>.</p>
            </div>
        `;
    }
}
