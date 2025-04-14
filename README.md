
# Weather App 🌤️

## Description
Weather App is a responsive, dynamic web application built using **Node.js**, **Express**, **EJS**, and **CSS**. This app allows users to search for weather conditions in any city worldwide and displays real-time data such as temperature, weather description, and minimum/maximum temperatures fetched from the OpenWeatherMap API.

## Features
- 🌟 Search for weather information by city name.
- 🌀 Real-time weather data including temperature, weather description, and more.
- ✨ Animated and responsive UI with glowing effects and smooth transitions.
- 🎨 Beautiful, interactive design using custom CSS with animations.
- 🔒 Secure handling of API keys with `.env` for safety.

## Technologies Used
- **Backend**:
  - [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.
  - [Express](https://expressjs.com/): Minimal and flexible web framework for Node.js.
  - [dotenv](https://www.npmjs.com/package/dotenv): For managing environment variables.
  - [Axios](https://axios-http.com/): HTTP client for API calls.
- **Frontend**:
  - [EJS](https://ejs.co/): Embedded JavaScript templates for dynamic content rendering.
  - **CSS**: Custom styles for animations, effects, and responsive design.
- **API**:
  - [OpenWeatherMap](https://openweathermap.org/api): Used to fetch live weather data.

## How to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/krishnendudey167/Weather-Website.git
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```
     APIKEY=your-secret-api-key
     ```

4. **Start the Server**:
   ```bash
   npm start
   ```
   The server will start at `http://localhost:3000`.

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Project Structure
```
weather-app/
├── public/
│   ├── styles/
│   │   └── main.css
│   ├── images/
│   └── pattern.svg
├── views/
│   └── index.ejs
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
```

## Credits
- Designed and Developed by **Krishnendu Dey** 🚀.
- Powered by OpenWeatherMap API.
