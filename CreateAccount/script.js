function validateMobile() {
    var mobileInput = document.getElementById("mobile-no").value;
    var mobileError = document.getElementById("mobile-error");
    var mobilePattern = /^[6-9]{1}[0-9]{9}$/;
    if (!mobilePattern.test(mobileInput) && mobileInput.length > 9) {
        mobileError.textContent = "Enter Valid Mobile Number";
        mobileError.classList.add("active");
        return false; // Validation failed
    } else {
        mobileError.textContent = "";
        mobileError.classList.remove("active");
        return true; // Validation successful
    }
}

function displayValidation() {
    var passField = document.getElementById("pass");
    var isFocused = document.activeElement === passField;

    var pass_letter = document.getElementById("password-error-letter");
    var pass_upper = document.getElementById("password-error-uppercase");
    var pass_lower = document.getElementById("password-error-lowercase");
    var pass_digit = document.getElementById("password-error-digit");
    var pass_specialchar = document.getElementById("password-error-specialchar");

    if (isFocused) {
        pass_letter.classList.add("active");
        pass_upper.classList.add("active");
        pass_lower.classList.add("active");
        pass_digit.classList.add("active");
        pass_specialchar.classList.add("active");
    } else {
        pass_letter.classList.remove("active");
        pass_upper.classList.remove("active");
        pass_lower.classList.remove("active");
        pass_digit.classList.remove("active");
        pass_specialchar.classList.remove("active");
    }
}
function validatePassword() {
    var passwordInput = document.getElementById("pass").value;
    var pass_letter = document.getElementById("password-error-letter");
    var passwordUpperCaseError = document.getElementById("password-error-uppercase");
    var passwordLowercaseError = document.getElementById("password-error-lowercase");
    var passwordDigitError = document.getElementById("password-error-digit");
    var passwordSpecialCharError = document.getElementById("password-error-specialchar");
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+}{":;?/>.<,`]).{8,}$/;

    // Reset all error classes
    pass_letter.classList.remove("active");
    passwordUpperCaseError.classList.remove("active");
    passwordLowercaseError.classList.remove("active");
    passwordDigitError.classList.remove("active");
    passwordSpecialCharError.classList.remove("active");

    // Check password against pattern
    if (!passwordPattern.test(passwordInput)) {
        // Set error classes based on individual criteria
        if (passwordInput.length < 8) {
            pass_letter.classList.add("active");
        }
        if (!/[A-Z]/.test(passwordInput)) {
            passwordUpperCaseError.classList.add("active");
        }
        if (!/[a-z]/.test(passwordInput)) {
            passwordLowercaseError.classList.add("active");
        }
        if (!/\d/.test(passwordInput)) {
            passwordDigitError.classList.add("active");
        }
        if (!/[~!@#$%^&*()_+}{":;?/>.<,`]/.test(passwordInput)) {
            passwordSpecialCharError.classList.add("active");
        }
        return false; // Validation failed
    }

    return true; // Validation successful
}


function validateConfirmPassword() {
    var passwordInput = document.getElementById("pass").value;
    var confirmPasswordInput = document.getElementById("confirm-pass").value;
    var confirmPasswordError = document.getElementById("confirm-password-error");

    if (passwordInput !== confirmPasswordInput) {
        confirmPasswordError.textContent = "Passwords don't match";
        confirmPasswordError.classList.add("active");
    } else {
        confirmPasswordError.textContent = "";
        confirmPasswordError.classList.remove("active");
    }

    // Call updateButtonState to enable or disable the sign-up button
    updateButtonState();
}
function updateButtonState() {
    var isMobileValid = validateMobile();
    var isPasswordValid = validatePassword();

    var signUpButton = document.getElementById("login-button");

    if (isMobileValid && isPasswordValid) {
        signUpButton.disabled = false;
        signUpButton.style.cursor = 'pointer';
    } else {
        signUpButton.style.cursor = 'not-allowed';
        signUpButton.disabled = true;
    }
}

// Add event listeners to call the updateButtonState function on input/change
document.getElementById("mobile-no").addEventListener("input", updateButtonState);
document.getElementById("pass").addEventListener("input", updateButtonState);

document.getElementById("pass").addEventListener("focus", displayValidation);
document.getElementById("pass").addEventListener("blur", displayValidation);
document.getElementById("view-pass").addEventListener("change", function () {
    var passField = document.getElementById("pass");
    var checkpass = document.getElementById("confirm-pass");
    if (this.checked) {
        passField.type = "text";
        checkpass.type = "text";
    } else {
        passField.type = "password";
        checkpass.type = "password";
    }
});