document.addEventListener('DOMContentLoaded', () => {
    const introElement = document.getElementById("intro");
    // Ensure the element exists before trying to type
    if (!introElement) {
        console.error("Element with ID 'intro' not found.");
        return;
    }

    const text = "Hi, I'm Pruthviraj — Web Developer & Tech Enthusiast 🚀";
    let index = 0;
    const typingSpeed = 70; // Milliseconds per character

    function type() {
        if (index < text.length) {
            // Append the next character to the text content
            introElement.textContent += text.charAt(index);
            index++;
            // Call the function again after a delay
            setTimeout(type, typingSpeed);
        } else {
            // Typing finished: add a class to signal completion (useful for CSS)
            introElement.classList.add('typing-finished');
            // Remove the temporary typing class if you added one
            // introElement.classList.remove('typing');
        }
    }

    // --- Initial state and starting the animation ---
    // Set initial empty text content
    introElement.textContent = '';

    // Add a class if you want to style the element differently *while* typing
    // introElement.classList.add('typing');

    // Start the typing animation
    type();

    // The CSS pseudo-element handles the blinking cursor visibility and animation
    // throughout the process based on the element's presence.
});