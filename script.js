// Update the existing functions in your script.js file

let currentMessageIndex = 0;

function showCurrentMessage() {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        if (index === currentMessageIndex) {
            message.classList.add('active-message');
        } else {
            message.classList.remove('active-message');
        }
    });
}

function nextMessage() {
    const messages = document.querySelectorAll('.message');
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    showCurrentMessage();
}

function prevMessage() {
    const messages = document.querySelectorAll('.message');
    currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
    showCurrentMessage();
}

// Initial setup
showCurrentMessage();

// Add these functions to your existing script.js file

// Update these functions in your script.js file

let currentPhotoIndex = 0;

function showCurrentPhoto() {
    const photos = document.querySelectorAll('.automated-image');
    photos.forEach((photo, index) => {
        if (index === currentPhotoIndex) {
            photo.classList.add('active-photo');
        } else {
            photo.classList.remove('active-photo');
        }
    });
}

function nextPhoto() {
    const photos = document.querySelectorAll('.automated-image');
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showCurrentPhoto();
}

function prevPhoto() {
    const photos = document.querySelectorAll('.automated-image');
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showCurrentPhoto();
}

// Automated photo carousel interval (change photo every 7 seconds)
setInterval(() => {
    nextPhoto();
}, 3000);

// Initial setup
showCurrentPhoto();
