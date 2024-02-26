
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    }
}

// Start the typewriter effect when the page loads
window.onload = function() {
    typeWriter();
};
