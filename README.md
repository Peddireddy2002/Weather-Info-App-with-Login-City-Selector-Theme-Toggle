
# 🌤️ Weather Info App with Login, City Selector & Theme Toggle

A simple, interactive web application that displays weather information based on selected cities. Built using **HTML, CSS, and JavaScript**, this project includes user authentication (mocked), a dark/light theme toggle, and a popup-based city selector. Perfect for frontend practice and a resume project!

---

## 🚀 Features

- 🔐 **Login Page** with basic validation  
- 🌗 **Light/Dark Mode Toggle** in the top-right corner  
- 🏙️ **City Selector Popup** with pre-filled weather data  
- 🌡️ **Displays temperature, humidity, and conditions**  
- 🎨 **Stylish background images and gradients**  
- 📱 **Responsive Design** for all screen sizes  

---

## 🧰 Technologies Used

- **HTML** – For structuring the webpage
- **CSS** – For styling elements, themes, and layout
- **JavaScript** – For interactivity, logic, and DOM manipulation

---

## 📂 File Structure
weather-app/
│
├── index.html # Main HTML page (Login, Main UI)
├── style.css # Styles for light/dark themes and layout
└── script.js # JS for theme toggle, login, city selection

---

## 🎯 How It Works

### 1. **Login Page**
- Basic form with username and password
- Validates if both fields are filled
- On success, shows the weather dashboard

### 2. **Theme Toggle**
- Switch between Light and Dark mode
- Toggle button labeled "Mode" on the top-right

### 3. **City Selector**
- Button labeled "Select City" opens a popup
- Choose from cities like New York, London, Tokyo, etc.
- Shows hardcoded temperature, humidity, and weather conditions

### 4. **Weather Display**
- Once a city is selected, its weather info is shown on the main page

---

## 🌍 Demo Preview

> Add screenshots or screen recordings here after deployment

---

## 🧠 Sample City Data Used

```javascript
const cityData = {
  "New York": { temp: 25, humidity: 70, condition: "Sunny" },
  "London": { temp: 18, humidity: 80, condition: "Cloudy" },
  "Tokyo": { temp: 30, humidity: 60, condition: "Clear" },
  "Paris": { temp: 22, humidity: 75, condition: "Rainy" },
  "Sydney": { temp: 28, humidity: 50, condition: "Windy" }
};


---

## 🎯 How It Works

### 1. **Login Page**
- Basic form with username and password
- Validates if both fields are filled
- On success, shows the weather dashboard

### 2. **Theme Toggle**
- Switch between Light and Dark mode
- Toggle button labeled "Mode" on the top-right

### 3. **City Selector**
- Button labeled "Select City" opens a popup
- Choose from cities like New York, London, Tokyo, etc.
- Shows hardcoded temperature, humidity, and weather conditions

### 4. **Weather Display**
- Once a city is selected, its weather info is shown on the main page

---

## 🌍 Demo Preview

> Add screenshots or screen recordings here after deployment

---

## 🧠 Sample City Data Used

```javascript
const cityData = {
  "New York": { temp: 25, humidity: 70, condition: "Sunny" },
  "London": { temp: 18, humidity: 80, condition: "Cloudy" },
  "Tokyo": { temp: 30, humidity: 60, condition: "Clear" },
  "Paris": { temp: 22, humidity: 75, condition: "Rainy" },
  "Sydney": { temp: 28, humidity: 50, condition: "Windy" }
};
💡 Future Improvements
Integrate real weather API (e.g., OpenWeatherMap)

Add user registration

Store user preferences in local storage

Add animations/transitions

Make cities dynamically loadable

How to Run Locally
Clone this repository:

git clone https://github.com/yourusername/weather-app.git
cd weather-app
Open the folder in VS Code.

Make sure you have the Live Server extension installed.

Right-click on index.html and select "Open with Live Server".

App will open at:

http://127.0.0.1:5500/index.html
