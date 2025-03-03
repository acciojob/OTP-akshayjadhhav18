//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus(); // Auto-focus the first input field

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        if (e.target.value && index < codes.length - 1) {
            codes[index + 1].focus(); // Move to the next field
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (e.target.value) {
                e.target.value = ""; // Clear the field
            } else if (index > 0) {
                codes[index - 1].focus(); // Move to the previous field
            }
        }
    });
});
