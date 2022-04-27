const boxes = document.querySelectorAll(".boxes div");

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