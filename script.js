
window.onload = function() {
    console.log("Page loaded and script running!");
};document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!"); // Debugging

    const slider = document.querySelector(".slider");
    if (!slider) {
        console.error("Slider element not found!"); // Debugging
        return; // Stop if slider doesn't exist
    }

    const openCaseButton = document.getElementById("open-case-button");
    if (!openCaseButton) {
        console.error("Button element not found!");
        return;
    }

    function startScrollAnimation() {
        console.log("Animation started!"); // Debugging
        slider.scrollLeft += 100; // Move slider to see if it works
    }

    openCaseButton.addEventListener("click", startScrollAnimation);
});
