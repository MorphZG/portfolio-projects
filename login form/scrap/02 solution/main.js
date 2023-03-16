// check if password and confirm password match
function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var matchMessage = document.getElementById("password-match-message");
    
    if (password != confirmPassword) {
        matchMessage.innerHTML = "Passwords do not match";
    } else {
        matchMessage.innerHTML = "Passwords match";
    }
}