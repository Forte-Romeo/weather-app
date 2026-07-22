# 🌤️ Weather Dashboard App

A modern weather dashboard built with **HTML, CSS, and JavaScript** using the **WeatherAPI.com API**. The application allows users to search for cities and view real-time weather information, hourly forecasts, and a 7-day weather forecast through a clean and responsive interface.

---

## 📸 Preview

This project features:

- Modern dark dashboard UI
- Real-time weather data
- City search functionality
- Hourly weather forecast
- 7-day weather forecast
- Air condition metrics
- Responsive design for desktop and mobile devices

---

## 🚀 Features

### Current Weather

- City name
- Current temperature
- Weather condition icon
- Chance of rain
- Real Feel temperature
- Wind speed
- Humidity
- UV Index

### Forecasts

- Hourly forecast
- 7-day weather forecast
- Dynamic weather icons

### Search

- Search any city worldwide
- Enter key support
- Error handling for invalid locations

### Responsive Design

- Desktop layout
- Tablet layout
- Mobile-friendly interface

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### API

- WeatherAPI.com

### Concepts Practiced

- Fetch API
- Async/Await
- JSON Data Handling
- DOM Manipulation
- Event Listeners
- Dynamic Content Rendering
- Error Handling
- Responsive Design

---

## 📁 Project Structure

```text
weather-app/
│
├── index.html
│
├── style.css
│
├── app.js
│
├── LICENSE
│
└── README.md
```

---

## 🔑 Getting Your API Key

1. Visit WeatherAPI.com

   https://www.weatherapi.com/

2. Create a free account.

3. Navigate to your dashboard.

4. Copy your API key.

5. Open:

```javascript
app.js
```

Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with:

```javascript
const API_KEY = "YOUR_ACTUAL_API_KEY";
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Forte-Romeo/weather-app.git
```

### Navigate Into Project

```bash
cd weather-app
```

### Open Project

Simply open:

```text
index.html
```

inside your browser.

No build tools or dependencies are required.

---

## 🌐 API Endpoint Used

```http
https://api.weatherapi.com/v1/forecast.json
```

Example:

```http
https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=Accra&days=7&aqi=yes&alerts=no
```

---

## 📚 Learning Objectives

This project was built to practice:

### JavaScript Fundamentals

- Variables
- Functions
- Arrays
- Objects
- Loops

### Intermediate JavaScript

- Async Programming
- Promises
- Fetch API
- Template Literals
- Error Handling

### Frontend Development

- Responsive Layouts
- Flexbox
- CSS Grid
- UI Components
- State Updates

### API Integration

- Making HTTP Requests
- Reading API Documentation
- Handling JSON Responses
- Rendering Live Data

---

## 🧠 Key JavaScript Functions

### Fetch Weather Data

```javascript
async function getWeather(city)
```

Retrieves weather information from WeatherAPI.

---

### Update Current Weather

```javascript
function updateCurrentWeather(data)
```

Updates current weather information on the page.

---

### Update Hourly Forecast

```javascript
function updateHourlyForecast(data)
```

Generates forecast cards dynamically.

---

### Update Weekly Forecast

```javascript
function updateWeeklyForecast(data)
```

Displays the 7-day forecast.

---

## 🎯 Future Improvements

### User Experience

- Loading animation
- Search suggestions
- Better error messages
- Weather animations

### Features

- Current location weather
- Saved cities
- Favorite locations
- Search history
- Dark/Light mode

### Advanced Features

- Interactive weather map
- Air quality data
- Sunrise and sunset times
- Weather alerts
- Multi-city dashboard

### Performance

- Local Storage caching
- Debounced search
- API optimization

---

## 📱 Responsive Breakpoints

| Device | Width |
|----------|----------|
| Desktop | > 1200px |
| Tablet | 768px - 1200px |
| Mobile | < 768px |

---

## 🎨 Design Inspiration

Inspired by modern weather dashboards featuring:

- Minimalist UI
- Dark theme aesthetics
- Glassmorphism-inspired cards
- Clean typography
- Dashboard-based layouts

---

## 🐛 Error Handling

The application handles:

- Invalid city names
- Empty searches
- API request failures
- Network issues

Example:

```javascript
try {
   const response = await fetch(url);
} catch(error) {
   console.error(error);
}
```

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Ferguson (Forte) Romeo**

BSc Information Technology Student

Software Engineering | AI | Entrepreneurship

Building projects to strengthen frontend development, API integration, and real-world software engineering skills.

---

## ⭐ Project Goal

The goal of this project is to move beyond basic JavaScript exercises and build a real-world application that demonstrates:

- API Integration
- Frontend Development
- Dynamic User Interfaces
- Responsive Design
- Problem Solving

This project serves as an important milestone on the journey toward becoming a professional software engineer.
