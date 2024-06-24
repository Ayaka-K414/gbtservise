document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("textContainer");
    var text = textContainer.innerHTML.replace(/<br\s*\/?>/gi, '\n'); // Replace <br> tags with newline characters
    textContainer.setAttribute('data-text', text);
});