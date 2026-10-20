const form = document.querySelector("#registration-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const ageInput = document.querySelector("#age");
const successMessage = document.querySelector("#success-message");

function showError(field, message) {
    document.querySelector("#" + field.id + "-error").textContent = message;
}

function validateForm() {
    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const age = Number(ageInput.value);

    showError(nameInput, "");
    showError(emailInput, "");
    showError(passwordInput, "");
    showError(confirmPasswordInput, "");
    showError(ageInput, "");

    if (name === "") {
        showError(nameInput, "Please enter your name.");
        isValid = false;
    }

    if (email === "") {
        showError(emailInput, "Please enter your email.");
        isValid = false;
    } else if (!emailInput.validity.valid || !email.includes("@") || !email.split("@")[1]?.includes(".")) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
    }

    if (password.length < 8) {
        showError(passwordInput, "Password must be at least 8 characters.");
        isValid = false;
    }

    if (confirmPassword === "") {
        showError(confirmPasswordInput, "Please confirm your password.");
        isValid = false;
    } else if (confirmPassword !== password) {
        showError(confirmPasswordInput, "Passwords do not match.");
        isValid = false;
    }

    if (ageInput.value.trim() === "") {
        showError(ageInput, "Please enter your age.");
        isValid = false;
    } else if (!Number.isInteger(age) || age < 1 || age > 120) {
        showError(ageInput, "Age must be a whole number from 1 to 120.");
        isValid = false;
    }

    return isValid;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.textContent = "";

    if (validateForm()) {
        successMessage.textContent = "Form is valid! This demo does not send data to a server.";
        form.reset();
    }
});

form.addEventListener("input", function () {
    successMessage.textContent = "";
});
