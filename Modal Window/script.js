const infoBtn = document.querySelector(".info");
const warningBtn = document.querySelector(".warning");
const dangerBtn = document.querySelector(".danger");
const main = document.querySelector(".main");

feather.replace();

const modal = (body) => {
    return `
    <div tabindex="10" class="modal">
        <h1 class="modal-title ${body.type}"><i data-feather="${body.icon}"></i>${body.title}</h1>
        <i data-feather="x" class="close-icon"></i>
        <p class="modal-description">${body.description}</p>
        <div class="modal-buttons">
            <button class="accept">Accept</button>
            <button class="cancel">Cancel</button>
        </div>
    </div>
    `;
};

function createModal(value) {
    const modalEl = document.createElement("div");
    modalEl.classList.add("modal-container");
    modalEl.innerHTML = modal(value);
    main.appendChild(modalEl);
    feather.replace();

    const acceptBtn = main.querySelector(".accept");
    const cancelBtn = main.querySelector(".cancel");
    const closeIcon = main.querySelector(".close-icon");
    const closeOnEsc = main.querySelector(".modal");
    const closeOnClick = main.querySelector(".modal-container");

    acceptBtn.addEventListener("click", () => {
        const modal = modalEl;
        modal.remove();
        activateBtns();
    });

    cancelBtn.addEventListener("click", () => {
        const modal = modalEl;
        modal.remove();
        activateBtns();
    });

    closeIcon.addEventListener("click", () => {
        const modal = modalEl;
        modal.remove();
        activateBtns();
    });

    closeOnEsc.focus();
    closeOnEsc.addEventListener("keydown", (e) => {
        if (e.keyCode == 27) {
            const modal = modalEl;
            modal.remove();
            activateBtns();
        }
    });

    closeOnClick.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-container")) {
            const modal = modalEl;
            modal.remove();
            activateBtns();
        }
    });
}

infoBtn.addEventListener("click", () => {
    disableBtns();
    createModal({
        type: "blue",
        icon: "info",
        title: "Info Modal",
        description: "Info Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, adipisci?",
    });
});

warningBtn.addEventListener("click", () => {
    disableBtns();
    createModal({
        type: "yellow",
        icon: "alert-triangle",
        title: "Warning Modal",
        description: "Warning Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, adipisci?",
    });
});

dangerBtn.addEventListener("click", () => {
    disableBtns();
    createModal({
        type: "red",
        icon: "alert-octagon",
        title: "Danger Modal",
        description: "Danger Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, adipisci?",
    });
});

function disableBtns() {
    infoBtn.disabled = true;
    infoBtn.classList.remove("info");
    warningBtn.disabled = true;
    warningBtn.classList.remove("warning");
    dangerBtn.disabled = true;
    dangerBtn.classList.remove("danger");
}

function activateBtns() {
    infoBtn.disabled = false;
    infoBtn.classList.add("info");
    warningBtn.disabled = false;
    warningBtn.classList.add("warning");
    dangerBtn.disabled = false;
    dangerBtn.classList.add("danger");
}