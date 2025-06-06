
function speedControl(videoElement, speed) {
    if (videoElement) {
        videoElement.playbackRate = speed;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.index-anim  video');
    speedControl(video, 0.75); // Change this value to adjust the speed (1.0 is normal speed)
});