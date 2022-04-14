const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUWVXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuwvxyz"
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=,<.>/?";

function getUppercase() {
    return uppercaseLetters[Math.floor(Math.random () * uppercaseLetters.length)];
}

function getLowercase() {
    return lowercaseLetters[Math.floor(Math.random () * lowercaseLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random () * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random () * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (uppercaseEl.checked) {
        password += getUppercase();
    }

    if (lowercaseEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        let x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];

    if (uppercaseEl.checked) {
        xs.push(getUppercase());
    }

    if (lowercaseEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});