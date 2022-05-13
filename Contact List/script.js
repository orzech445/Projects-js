let contactList = [
    {
        name: "Jan Orzechowski",
        phoneNumber: "123456789",
    },
    {
        name: "Marek Kosowski",
        phoneNumber: "234567890",
    }
];

const renderContacts = () => {
    const list = document.querySelector(".contacts-list");
    list.innerHTML = "";
    
    contactList.forEach((item) => {
        const newContact = `
            <div class="contact">
                <h2>${item.name}</h2>
                <p>${item.phoneNumber}</p>
                <div class="icons">
                    <i class="fa fa-trash-o"></i>
                    <i class="fa fa-edit"></i>
                </div>
            </div>
        `;
        list.innerHTML += newContact;
    });
};

document.querySelector(".addBtn").addEventListener("click", () => {
    const inputName = document.querySelector(".name");
    const inputNumber = document.querySelector(".number");

    if (inputName.value.length > 0 && /^-?\d+$/.test(inputNumber.value)) {
        contactList.push(
            {
                name: inputName.value,
                phoneNumber: inputNumber.value,
            }
        );
    } else {
        alert("Name or Phone number is not valid");
    }

    renderContacts();

    inputName.value = "";
    inputNumber.value = "";
});

document.querySelector(".contacts-list").addEventListener("click", (e) => {
    const main = document.querySelector(".main");
    if (e.target.className === "fa fa-trash-o") {
        let trashes = [...document.querySelectorAll(".fa.fa-trash-o")];
        const trashIndex = trashes.indexOf(e.target);

        contactList = contactList.filter((el, index) => {
            return index !== trashIndex;
        });
    }

    if (e.target.className === "fa fa-edit") {
        let editIcons = [...document.querySelectorAll(".fa.fa-edit")];
        const editIndex = editIcons.indexOf(e.target);

        contactList.forEach((el, index) => {
            if (index === editIndex) {

                const editModal = document.createElement("div");
                editModal.className = "modal";
                editModal.innerHTML = `
                    <h2>Edit contact</h2>
                    <input type="text" placeholder="Name" class="edit-name">
                    <input type="text" placeholder="Phone number" class="edit-number">
                    <div class="buttons">
                        <button class="ok">Ok</button>
                        <button class="cancel">Cancel</button>
                    </div>
                `;

                document.body.appendChild(editModal);

                document.querySelector(".ok").addEventListener("click", () => {
                    const editName = document.querySelector(".edit-name");
                    const editNumber = document.querySelector(".edit-number");

                    if (editName.value.length > 0 && /^-?\d+$/.test(editNumber.value)) {

                        el.name = editName.value;
                        el.phoneNumber = editNumber.value;
                    } else {
                        alert("Name or Phone number is not valid");
                    }

                    renderContacts();

                    editModal.remove();
                });

                document.querySelector(".cancel").addEventListener("click", () => {
                    editModal.remove();
                });

            }
        });

    }

    renderContacts();
});


renderContacts();