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
    const totalLength = parseInt(passwordLength.value);
    const useLowercase = lowercaseCheckbox.checked;
    const useUppercase = uppercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    // Définis combien de caractères tu veux par type (à adapter)
    let countUpper = 0;
if (useUppercase) {
    countUpper = 1;
}
let countLower = 0;
if (useLowercase) {
    countLower = 3;
}

let countNumber = 0;
if (useNumbers) {
    countNumber = 2;
}

let countSymbol = 0;
if (useSymbols) {
    countSymbol = 1;
}



    const totalRequested = countUpper + countLower + countNumber + countSymbol;

    if (totalRequested > totalLength) {
        passwordOutput.value = "Trop de caractères par type!";
        return;
    }

    function getRandomChars(chars, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
            const index = Math.floor(Math.random() * chars.length);
            result += chars[index];
        }
        return result;
    }

    let password = "";
    if (useUppercase) password += getRandomChars(uppercaseChars, countUpper);
    if (useLowercase) password += getRandomChars(lowercaseChars, countLower);
    if (useNumbers) password += getRandomChars(numberChars, countNumber);
    if (useSymbols) password += getRandomChars(symbolChars, countSymbol);

    // Compléter le mot de passe si nécessaire avec les types cochés
    let remainingLength = totalLength - password.length;
    let extraChars = "";
    if (remainingLength > 0) {
        let allowedChars = "";
        if (useUppercase) allowedChars += uppercaseChars;
        if (useLowercase) allowedChars += lowercaseChars;
        if (useNumbers) allowedChars += numberChars;
        if (useSymbols) allowedChars += symbolChars;

        extraChars = getRandomChars(allowedChars, remainingLength);
    }

    password += extraChars;

    // Ne pas mélanger l'ordre (majuscule → minuscule → nombre → symbole)
    passwordOutput.value = password;
    passwordOutput.style.color = "white";

    navigator.clipboard.writeText(password); 

    console.log(`Mot de passe généré : ${password}`);
});

