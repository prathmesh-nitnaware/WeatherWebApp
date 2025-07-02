document.getElementById('weatherForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value.trim();
  const apiKey = '81b9d0fc124901045809f4b5aaa8a5a7'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });
});