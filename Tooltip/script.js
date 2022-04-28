const boxes = document.querySelectorAll(".boxes div");
const orangeBox = document.querySelector(".orange");
const popUp = document.querySelector(".pop-up");

let isCreated = false;

boxes.forEach((box) => (box.addEventListener("mouseover", (e) => {
    const tooltipParent = e.target;
    const tooltipText = e.target.dataset.tooltip;
    const tooltipPosition = e.target.dataset.tooltipPosition;

    const spanEl = document.createElement("span");
    spanEl.className = `tooltip ${tooltipPosition || "top"}`;
    spanEl.innerHTML = tooltipText;

    tooltipParent.appendChild(spanEl);
})));

boxes.forEach((box) => box.addEventListener("mouseleave", (e) => {
    const tooltip = document.querySelector(".tooltip");
    tooltip.remove();
}));

orangeBox.addEventListener("click", (e) => {
    if (!isCreated) {
        isCreated = true;
        const spanEl = document.createElement("span");
        spanEl.className = "tooltip-bottom";
        spanEl.innerHTML = `This is a orange box`;

        const closeIcon = document.createElement("p");
        closeIcon.className = "close-icon";
        closeIcon.innerHTML = `&#10005`;

        popUp.appendChild(spanEl);
        spanEl.appendChild(closeIcon);

        closeIcon.addEventListener("click", () => {
            const tooltipBottom = document.querySelector(".tooltip-bottom");
            tooltipBottom.remove();
            isCreated = false;
        })
    }
});