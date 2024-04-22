document.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('playButton');
    const myVideo = document.getElementById('myVideo');
    playButton.addEventListener('click', function() {
        myVideo.play();
    });
});