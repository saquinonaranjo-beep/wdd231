
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");
const yearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});


const lat = "19.1738"; 
const lon = "-96.1342"; 
const apiKey = "96323c663a757593af66b61ade97f128";

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeatherData() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) throw new Error("Weather network issue");

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (error) {
        console.error("Weather Error:", error);
    }
}

function displayCurrentWeather(data) {
    const container = document.querySelector("#current-weather");
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    container.innerHTML = `
        <div class="weather-current-card">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
            <p class="main-temp">${temp}°C</p>
            <p class="main-desc">${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
            <p class="extra-info">Humidity: ${data.main.humidity}%</p>
        </div>
    `;
}

function displayForecast(data) {
    const container = document.querySelector("#weather-forecast");
    container.innerHTML = ""; 

  
    const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

    dailyForecasts.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const temp = Math.round(day.main.temp);
        const icon = day.weather[0].icon;

        const row = document.createElement("div");
        row.className = "forecast-row";
        row.innerHTML = `
            <span class="forecast-day">${dayName}:</span>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="icon">
            <span class="forecast-temp"><strong>${temp}°C</strong></span>
        `;
        container.appendChild(row);
    });
}


const membersUrl = "data/members.json";
const spotlightsContainer = document.querySelector("#spotlights-container");

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error("Members data failed");
        const members = await response.json();


        const premiumMembers = members.filter(m => m.membership === "Gold" || m.membership === "Silver");

        // Step 2: Shuffle array order completely randomly
        const randomized = premiumMembers.sort(() => 0.5 - Math.random());

        const selected = randomized.slice(0, 3);

        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            card.innerHTML = `
                <h3>${member.name}</h3>
                <p class="tagline"><em>${member.membership} Level</em></p>
                <hr>
                <p>📞 Phone: ${member.phone}</p>
                <p>📍 Address: ${member.address}</p>
                <p>🌐 <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
                <img src="${member.image}" alt="${member.name}" loading="lazy">
            `;
            spotlightsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Spotlight Error:", error);
    }
}

// Fire up both operational engines
getWeatherData();
getSpotlights();