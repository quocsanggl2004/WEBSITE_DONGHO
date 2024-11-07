document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var loginError = document.getElementById('loginError');

    if (username === '' || password === '') {
        loginError.style.display = 'block';
    } else {
        loginError.style.display = 'none';
        // Perform login logic here
        console.log('Logging in with', username, password);
    }
});


$(document).ready(function(){
    $('#carouselExample').carousel({
        interval: 1000,
        ride: 'carousel'
    });
});