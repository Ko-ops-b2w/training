const passwordOutput = document.getElementById("password-output");
const passwordLength = document.getElementById("password-length");
const displayPasswordLength = document.getElementById("display-password-length");

const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateButton = document.getElementById("generateButton");

passwordLength.addEventListener("input", () => {
    displayPasswordLength.value = passwordLength.value;
});

generateButton.addEventListener("click", () => {
    const length = parseInt(passwordLength.value);
    const useLowercase = lowercaseCheckbox.checked;
    const useUppercase = uppercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allChars = "";
    if (useLowercase) allChars += lowercaseChars;
    if (useUppercase) allChars += uppercaseChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;
    if (allChars.length === 0) {
        passwordOutput.value = "Choisi des caractères!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    passwordOutput.value = password;
    passwordOutput.style.color = "white";

    console.log(`Mot de passe généré : ${password}`);

   
    
    
});