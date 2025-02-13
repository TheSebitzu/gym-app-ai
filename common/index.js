// Clear skipped exercises when loading the index page
localStorage.removeItem('skippedExercises');
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/gym-app-ai/common/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(error) {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

localStorage.skippedExercises = [];