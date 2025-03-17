document.getElementById("open-case-button").addEventListener("click", startCaseOpening);

let slider = document.querySelector(".slider");
let skins = document.querySelectorAll(".skin");
let totalSkins = skins.length;
let isSliding = false;
let slideInterval;
let randomIndex;

function startCaseOpening() {
    // If already sliding, return to prevent multiple clicks
    if (isSliding) return;

    isSliding = true;
    randomIndex = getRandomIndex(totalSkins);

    // Enable smooth scrolling animation for the skins
    slider.style.transition = "transform 3s ease-out";

    // Start the slider moving
    slideInterval = setInterval(() => {
        let currentTransform = getSliderTransform();
        let newTransform = currentTransform + 5; // Increase the scroll position to move the slider
        slider.style.transform = `translateX(-${newTransform}px)`;
    }, 10); // This makes the slider move by 5px every 10ms

    // Stop the slider after a random time
    let randomTime = getRandomTime(); // Random time between 3-5 seconds for realism
    setTimeout(stopCaseOpening, randomTime);
}

function stopCaseOpening() {
    // Stop the slider animation by clearing the interval and transitioning to the final position
    clearInterval(slideInterval);
    slider.style.transition = "transform 1s ease-out"; // Smooth out the final stop
    slider.style.transform = `translateX(-${getFinalTransform()}px)`; // Stop the slider at a random skin

    // Disable further sliding
    setTimeout(() => {
        isSliding = false;
    }, 1000); // Allow clicking again after animation
}

function getSliderTransform() {
    const style = window.getComputedStyle(slider);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41 || 0; // Get the current transform X value
}

function getRandomTime() {
    return Math.random() * (5000 - 3000) + 3000; // Random time between 3-5 seconds
}

function getRandomIndex(total) {
    return Math.floor(Math.random() * total); // Random index of skins
}

function getFinalTransform() {
    let skinWidth = skins[0].offsetWidth + 20; // Calculate width of a skin including margin
    return randomIndex * skinWidth; // Scroll to the selected skin index
}
