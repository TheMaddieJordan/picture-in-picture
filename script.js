const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Async function - prompt user to select media stream, pass to video element, then play.
async function selectMediaStream() {
    // try catch statement
    try {
        // work with screen capture API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Cath Errors
        console.log('error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load - calling our function
selectMediaStream();