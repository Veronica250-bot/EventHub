// Tapahtumadata: Jalkapallo, jääkiekko ja koripallo Uudellamaalla vuonna 2025
const events = [
    // Jalkapallo
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
        id: "3", 
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
        id: "4", 
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
        id: "5", 
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
        id: "6", 
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
        id: "7", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs Ilves", 
        date: "25.6.2025", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kesäkauden jännittävä ottelu HJK:n kotikentällä.", 
        url: "https://www.hjk.fi" 
    },
    { 
        id: "8", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: FC Honka vs AC Oulu", 
        date: "18.8.2025", 
        location: "Espoo", 
        venue: "Tapiolan urheilupuisto", 
        ticketPrice: "20€", 
        description: "Espoon paikallisottelu, jossa Honka haastaa AC Oulun.", 
        url: "https://www.fchonka.fi" 
    },
    { 
        id: "9", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: PK-35 vs FC Haka", 
        date: "12.9.2025", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Syyskauden ottelu Vantaalla. Tule kannustamaan PK-35:ttä!", 
        url: "https://www.pk-35.fi" 
    },

    // Jääkiekko
    { 
        id: "10", 
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
        id: "11", 
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
        id: "12", 
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
        id: "13", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs Lukko", 
        date: "25.12.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Joulun peli. Tule nauttimaan kiekkoviihteestä!", 
        url: "https://www.jokerit.fi" 
    },
    { 
        id: "14", 
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
        id: "15", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: HIFK vs Pelicans", 
        date: "5.6.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "35€", 
        description: "Kesäkauden ottelu. Luvassa viihdyttävä ilta!", 
        url: "https://www.hifk.fi" 
    },
    { 
        id: "16", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs SaiPa", 
        date: "18.10.2025", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Syyskauden ottelu. Tule kannustamaan Jokereita!", 
        url: "https://www.jokerit.fi" 
    },

    // Koripallo
    { 
        id: "17", 
        sport: "Koripallo", 
        name: "Koripallo: Helsinki Seagulls vs BC Nokia", 
        date: "20.5.2025", 
        location: "Helsinki", 
        venue: "Töölön kisahalli", 
        ticketPrice: "15€", 
        description: "Korisliigan ottelu. Seagulls kohtaa BC Nokian!", 
        url: "https://www.helsinkiseagulls.com" 
    },
    { 
        id: "18", 
        sport: "Koripallo", 
        name: "Koripallo: Espoo Basket vs Vantaa Stars", 
        date: "18.6.2025", 
        location: "Espoo", 
        venue: "Tapiolan urheiluhalli", 
        ticketPrice: "15€", 
        description: "Paikallisottelu Espoossa. Tule kannustamaan!", 
        url: "https://www.korisliiga.fi" 
    },
    { 
        id: "19", 
        sport: "Koripallo", 
        name: "Koripallo: Helsinki Seagulls vs KTP Basket", 
        date: "10.9.2025", 
        location: "Helsinki", 
        venue: "Töölön kisahalli", 
        ticketPrice: "15€", 
        description: "Syyskauden ottelu. Seagulls haastaa KTP:n!", 
        url: "https://www.helsinkiseagulls.com" 
    },
    { 
        id: "20", 
        sport: "Koripallo", 
        name: "Koripallo: Espoo Basket vs Lahti Basketball", 
        date: "15.10.2025", 
        location: "Espoo", 
        venue: "Tapiolan urheiluhalli", 
        ticketPrice: "15€", 
        description: "Korisliigan ottelu Espoossa. Tule nauttimaan pelistä!", 
        url: "https://www.korisliiga.fi" 
    },
    { 
        id: "21", 
        sport: "Koripallo", 
        name: "Koripallo: Vantaa Stars vs UU-Korihait", 
        date: "5.11.2025", 
        location: "Vantaa", 
        venue: "Myyrmäen urheilutalo", 
        ticketPrice: "10€", 
        description: "Syyskauden ottelu Vantaalla. Tule kannustamaan Vantaa Starsia!", 
        url: "https://www.korisliiga.fi" 
    },
    { 
        id: "22", 
        sport: "Koripallo", 
        name: "Koripallo: Helsinki Seagulls vs Kataja Basket", 
        date: "20.12.2025", 
        location: "Helsinki", 
        venue: "Töölön kisahalli", 
        ticketPrice: "15€", 
        description: "Joulukuun ottelu. Seagulls kohtaa Katajan!", 
        url: "https://www.helsinkiseagulls.com" 
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
