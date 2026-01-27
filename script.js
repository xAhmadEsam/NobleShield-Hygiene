// Handle loading screen
document.addEventListener('DOMContentLoaded', function () {
    // Hide loading screen after animation completes
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hide');
    }, 3500); // 3500ms to account for animation + slight pause
});


