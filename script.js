document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const loginScreen = document.getElementById("loginScreen");
  const weatherApp = document.getElementById("weatherApp");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const showCitiesBtn = document.getElementById("showCitiesBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const citiesModal = document.getElementById("citiesModal");
  const closeCities = document.getElementById("closeCities");
  const citiesListPopup = document.getElementById("citiesListPopup");
  const form = document.getElementById("weatherForm");
  const cityInput = document.getElementById("cityInput");
  const resultDiv = document.getElementById("result");

  // Hardcoded weather data
  const cityWeatherData = {
    "new york": {
      name: "New York",
      country: "US",
      description: "clear sky",
      temp: 25,
      humidity: 60,
      windSpeed: 3.5,
    },
    london: {
      name: "London",
      country: "GB",
      description: "light rain",
      temp: 18,
      humidity: 75,
      windSpeed: 4.2,
    },
    tokyo: {
      name: "Tokyo",
      country: "JP",
      description: "few clouds",
      temp: 28,
      humidity: 70,
      windSpeed: 2.8,
    },
    paris: {
      name: "Paris",
      country: "FR",
      description: "scattered clouds",
      temp: 22,
      humidity: 65,
      windSpeed: 3.0,
    },
    sydney: {
      name: "Sydney",
      country: "AU",
      description: "sunny",
      temp: 26,
      humidity: 55,
      windSpeed: 5.0,
    },
    mumbai: {
      name: "Mumbai",
      country: "IN",
      description: "humid",
      temp: 30,
      humidity: 80,
      windSpeed: 3.2,
    },
  };

  // Show weather info for a city
  function displayWeather(city) {
    city = city.toLowerCase();
    if (cityWeatherData[city]) {
      const data = cityWeatherData[city];
      resultDiv.innerHTML = `
        <h3>Weather in ${data.name}, ${data.country}</h3>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Temperature:</strong> ${data.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.humidity} %</p>
        <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
      `;
    } else {
      resultDiv.textContent = "Sorry, we don't have weather data for that city.";
    }
  }

  // Populate cities list in modal
  function populateCitiesList() {
    citiesListPopup.innerHTML = "";
    Object.values(cityWeatherData).forEach(({ name }) => {
      const li = document.createElement("li");
      li.textContent = name;
      li.addEventListener("click", () => {
        cityInput.value = name;
        citiesModal.style.display = "none";
        displayWeather(name.toLowerCase());
      });
      citiesListPopup.appendChild(li);
    });
  }

  // Dark mode toggle from localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Login form submit
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "password") {
      loginMessage.style.color = "lightgreen";
      loginMessage.textContent = "Login successful! Loading app...";
      setTimeout(() => {
        loginScreen.style.display = "none";
        weatherApp.style.display = "block";
        populateCitiesList();
      }, 1200);
    } else {
      loginMessage.style.color = "#ff5555";
      loginMessage.textContent = "Invalid username or password.";
    }
  });

  // Show cities modal
  showCitiesBtn.addEventListener("click", () => {
    populateCitiesList();
    citiesModal.style.display = "block";
  });

  // Close cities modal
  closeCities.addEventListener("click", () => {
    citiesModal.style.display = "none";
  });

  // Close cities modal by clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === citiesModal) {
      citiesModal.style.display = "none";
    }
  });

  // Weather form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayWeather(cityInput.value);
  });

  // Logout button functionality
  logoutBtn.addEventListener("click", () => {
    weatherApp.style.display = "none";
    loginScreen.style.display = "flex";
    loginForm.reset();
    loginMessage.textContent = "";
    resultDiv.textContent = "";
    cityInput.value = "";
  });
});





