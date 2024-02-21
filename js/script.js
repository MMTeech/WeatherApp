let apiKey = "e1634cf9a3a24cb6a4b95721242102"; // Maintain secrecy

// Function to fetch and process data
function fetchWeatherData() {
  let inputCity = document.getElementById('input-el').value; // Move this line inside the function
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity}`; // Dynamically construct the URL with the actual data source

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle successful response
      console.log("Current weather in", inputCity, ":", data);

      // Access and display specific weather data:
      const currentTemp = data.current.temp_c;
      const weatherCondition = data.current.condition.text;
      const weatherConditionIcon = data.current.condition.icon;
      const cityName = data.location.name;

      // Example display (adapt to your UI):
      document.getElementById('weather-display').innerHTML = `
        <p>Weather in ${cityName}: ${currentTemp}°C, ${weatherCondition}</p>
        <img src="https:${weatherConditionIcon}" alt="Weather Icon">
      `;
    })
    .catch(error => {
      // Handle errors gracefully
      console.error("Error fetching weather data:", error);
      document.getElementById('weather-display').textContent = 'Error: Could not fetch weather data.';
    });
}

// Event listener for user input (replace with your logic)
const btn = document.getElementById('search-btn'); // Assuming a search button
btn.addEventListener('click', () => {
  let inputCity = document.getElementById('input-el').value; // Move this line inside the event listener
  if (inputCity) { // Check for valid input
    fetchWeatherData();
  } else {
    // Handle empty input (e.g., display an error message)
    document.getElementById('weather-display').textContent = 'Please enter a city name.';
  }
});
