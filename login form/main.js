const $passwordInput = $("#password");
const $confirmPasswordInput = $("#confirm-password");
const $warningMessage = $("#warning-message");
const $emailInput = $("#email");

$("#login-form").on("submit", function (event) {
    if ($passwordInput.val() !== $confirmPasswordInput.val()) {
        $warningMessage.css("display", "block");
        $confirmPasswordInput.css("border", "2px solid red");
        $passwordInput.css("border", "2px solid red");
        event.preventDefault();
    } else {
        $warningMessage.css("display", "none");
        $confirmPasswordInput.css("border", "none");
        alert("Login successful!");
    }


});

const $submitBtn = $("#submit-btn");
const $resultContainer = $("#result-container");
const $tempEl = $("#temp");
const $latEl = $("#lat");
const $longEl = $("#long");

$submitBtn.on("click", function () {
    const cityInput = $("#city-input").val();
    const apiKey = "03eb0291ff0d4026b0d143846231603";
    const baseURL = "http://api.weatherapi.com/v1";

    $.ajax({
        url: `${baseURL}/current.json?key=${apiKey}&q=${cityInput}`,
        dataType: "json",
        success: function (data) {
            $tempEl.text(data.current.temp_c + '°C');
            $latEl.text(data.location.lat);
            $longEl.text(data.location.lon);
            $resultContainer.css("display", "block");
        },
        error: function (error) {
            console.error("Error:", error);
            alert("Unable to get weather data. Please try again.");
        }
    });
});