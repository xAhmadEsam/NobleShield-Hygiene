// Handle loading screen: keep showing until full page load
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Wait at least 3500ms after load before hiding the loader
        setTimeout(() => {
            loadingScreen.classList.add('hide');
        }, 3500);
    }
});


