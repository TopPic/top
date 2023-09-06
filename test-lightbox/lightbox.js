// Get references to the lightbox and trigger button
const lightbox = document.getElementById('lightbox');
const openButton = document.getElementById('openLightbox');
const closeButton = document.getElementById('closeLightbox');

// Function to open the lightbox
function openLightbox() {
    lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Event listeners
openButton.addEventListener('click', openLightbox);
closeButton.addEventListener('click', closeLightbox);

// Automatically open the lightbox when the page loads
window.addEventListener('load', openLightbox);

// Function to check if a cookie exists
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie with an expiration time
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to open the lightbox
function openLightbox() {
    lightbox.style.display = 'block';

    // Check if the "hideCheckbox" cookie exists
    const hideCheckbox = getCookie('hideCheckbox');
    if (hideCheckbox === 'true') {
        // If the cookie is set to true, hide the checkbox
        checkboxContainer.style.display = 'none';
    }
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Event listeners
openButton.addEventListener('click', openLightbox);
closeButton.addEventListener('click', closeLightbox);

// Automatically open the lightbox when the page loads
window.addEventListener('load', openLightbox);

// Handle the checkbox click event
const checkbox = document.getElementById('checkbox');
const checkboxContainer = document.querySelector('.checkbox-container');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        // Set a cookie to hide the checkbox for 24 hours
        setCookie('hideCheckbox', 'true', 24);
        checkboxContainer.style.display = 'none';
    }
});

