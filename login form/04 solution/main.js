// get references to the password and confirm password input fields
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
// get reference to the warning message
const warningMessage = document.getElementById("warning-message");

// add an event listener to the form submit button
document.getElementById("login-form").addEventListener("submit", function (event) {
    // check if the passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
        // if the passwords don't match, show the warning message and prevent the form from submitting
        warningMessage.style.display = "block";
        confirmPasswordInput.style.border = "2px solid red";
        event.preventDefault();
    } else {
        // if the passwords match, hide the warning message and remove the red border from the confirm password input field
        warningMessage.style.display = "none";
        confirmPasswordInput.style.border = "none";
    }
});

// current weather
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const tempEl = document.getElementById('temp');
const latEl = document.getElementById('lat');
const longEl = document.getElementById('long');

submitBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('city-input').value;
    const apiKey = "03eb0291ff0d4026b0d143846231603"
    const baseURL = "http://api.weatherapi.com/v1"

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`)
        .then(response => response.json())
        .then(data => {
            tempEl.textContent = data.current.temp_c + '°C';
            latEl.textContent = data.location.lat;
            longEl.textContent = data.location.lon;
            resultContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Unable to get weather data. Please try again.');
        });

});
