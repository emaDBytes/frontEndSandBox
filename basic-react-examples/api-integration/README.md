# React API Integration Examples

This directory contains standalone HTML files demonstrating how to fetch and display data from various APIs using React. Each example uses React and Babel loaded directly in the browser.

## Files:

- **githubrepos.html**: Fetches and displays React-related repositories from GitHub API
- **githubrepos_withInput.html**: Same as above but allows user to search for repositories by keyword
- **nasaapod.html**: Displays NASA's Astronomy Picture of the Day with explanation
- **trivia.html**: Fetches random computer science trivia questions with answer reveal functionality
- **weather.html**: Displays current weather for London using OpenWeatherMap API
- **weatherPro.html**: Enhanced weather app allowing users to search for weather by city name

## Core Concepts Demonstrated:

- Data fetching with the Fetch API
- React's useEffect hook for API calls
- Loading and error states
- Conditional rendering based on API responses
- User input handling for dynamic API requests
- Basic error handling for API failures

## How to Use:

Simply open any HTML file in a browser to see the React API integration in action. No server or build process required.

## API Keys:

Some examples use free API keys with limited rate quotas:

- OpenWeatherMap examples have a shared demo key
- NASA APOD uses the DEMO_KEY with limited daily requests

If you plan to use these examples frequently, consider replacing these with your own API keys.
