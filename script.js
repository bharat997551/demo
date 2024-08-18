document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-animation');
    const texts = [
        "Quality Assurance Engineer  ",
        "Automation Tester  ",
        "Manual Tester  "
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            if (charIndex < texts[textIndex].length) {
                typingText.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust the speed here (lower is faster)
            } else {
                isTyping = false;
                setTimeout(type, 100); // Pause before starting backspace
            }
        } else {
            if (charIndex > 0) {
                typingText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 100); // Adjust the backspace speed here (lower is faster)
            } else {
                isTyping = true;
                textIndex = (textIndex + 1) % texts.length; // Move to the next text
                setTimeout(type, 500); // Pause before typing the next text
            }
        }
    }

    type(); // Start typing animation
});
