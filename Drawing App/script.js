const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.querySelector(".increase");
const sizeSpan = document.querySelector(".size");
const decreaseBtn = document.querySelector(".decrease");
const colorInput = document.querySelector(".color");
const clearBtn = document.querySelector(".clear");

let sAngle = 30;
let isPressed = false;
let x = undefined;
let y = undefined;
let color = "black";


canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.target.offsetX;
    y = e.target.offsetY;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, sAngle, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = sAngle * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeSpan.innerText = sAngle;
}

increaseBtn.addEventListener("click", () => {
    if (sAngle < 50) {
        sAngle += 5;
    } else {
        alert("Cannot thicker");
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    if (sAngle > 5) {
        sAngle -= 5;
    } else {
        alert("Cannot thinner");
    }

    updateSizeOnScreen();
});

colorInput.addEventListener("change", (e) => {
    color = e.target.value;
});

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});