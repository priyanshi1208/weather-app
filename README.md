# Weather App

A responsive weather application built with React, Material-UI, and Redux that displays the current weather and a 5-day forecast for a selected city. It allows users to toggle between Celsius and Fahrenheit units.

## Features

- Displays the current weather data (temperature, weather condition, etc.) for the selected city.
- 5-day weather forecast with daily high and low temperatures.
- Toggle between Celsius and Fahrenheit units.
- Search for any city and display weather details.
- Responsive design for mobile and desktop devices.

## Demo

You can find a live demo of the app [https://weather-1o89uw9l9-priyanshi-shuklas-projects.vercel.app/]

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js v12.x or higher
- npm v6.x or higher

### Setup

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to your project:

    - Create a `.env` file in the root of the project.
    - Add your API key:

    ```bash
    REACT_APP_WEATHER_API_KEY=your-api-key-here
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The app will be running at `http://localhost:3000`.

## Usage

1. Enter a city name in the search bar to view current weather and forecast data for that city.
2. Use the toggle button to switch between Celsius and Fahrenheit units.
3. The app caches weather data for the last searched city, so it loads quickly when revisited.

## Technologies Used

- **Frontend**: React, Material-UI
- **State Management**: Redux, Redux Toolkit
- **API**: OpenWeatherMap API for weather data
- **Styling**: CSS-in-JS, Material-UI
- **Tools**: Axios for API calls, React Hooks for state and lifecycle management
- **Build Tool**: Webpack, Babel