let currentProducts = products;
const productsList = document.querySelector(".products-list");
let categories = new Set();
const categoriesItem = document.querySelector(".categories-item");
const emptyState = document.querySelector(".empty-state");
let basket = [];
const basketP = document.querySelector(".basket p");
const closeIcon = document.querySelector(".fa-close");

const addToBasket = (e) => {
    const selectedId = parseInt(e.target.dataset.id);

    const key = currentProducts.findIndex((item) => item.id === selectedId);

    basket.push(currentProducts.at(key));

    const basketTotal = basket.reduce((sum, item) => {
        if (item.saleAmount) {
            return (sum += item.price - item.saleAmount);
        } else {
            return (sum += item.price);
        }
    }, 0);

    closeIcon.classList.add("active");

    basketP.innerHTML = `${basketTotal} zł`;

};

const renderProducts = (items) => {
    productsList.innerHTML = ``;

    items.forEach((item) => {
        const product = document.createElement("div");
        product.className = `product ${item.sale ? "on-sale" : ""}`;
        product.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h2 class="product-title">${item.name}</h2>
            <p class="product-description">${item.description}</p>
            <div class="price">
                <p class="normal-price">${(item.price).toFixed(2)} zł</p>
                <p class="sale-price">${(item.price - item.saleAmount).toFixed(2)} zł</p>
            </div>
            <button data-id="${item.id}" class="add-to-basket-btn">Dodaj do koszyka</button>
            <span class="special-offer">Promocja</span>
        `;

        productsList.appendChild(product);
    });

    const addToBasketBtns = document.querySelectorAll(".add-to-basket-btn");
    addToBasketBtns.forEach((item) => item.addEventListener("click", addToBasket));

};

const renderCategories = (items) => {
    items.forEach((item) => {
        categories.add(item.category);
    })

    categories = ["wszystkie", ...categories];

    categories.forEach((element, index) => {
        const categoryBtn = document.createElement("button");
        categoryBtn.innerText = element;

        index === 0 ? categoryBtn.classList.add("active") : "";

        categoriesItem.appendChild(categoryBtn);
    });
};

document.onload = renderProducts(currentProducts);
document.onload = renderCategories(currentProducts);

const categoriesBtns = document.querySelectorAll(".categories-item button");

categoriesBtns.forEach((btn) => btn.addEventListener("click", (e) => {
    input.value = "";

    const foundProducts = currentProducts.filter(
        (item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    foundProducts.length === 0 ? emptyState.classList.add("active") : emptyState.classList.remove("active");

    currentProducts = products;

    categoriesBtns.forEach((btn2) => btn2.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.innerText === "wszystkie") {
        currentProducts = products;
    } else {
        currentProducts = currentProducts.filter(
            (item) => item.category === e.target.innerText
        );
    }

    renderProducts(currentProducts);
    console.log(currentProducts);
}));

const input = document.querySelector(".input");

input.addEventListener("input", (e) => {
    const foundProducts = currentProducts.filter(
        (item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    foundProducts.length === 0 ? emptyState.classList.add("active") : emptyState.classList.remove("active");

    renderProducts(foundProducts);
})

closeIcon.addEventListener("click", () => {
    basketP.innerHTML = "Koszyk";
    basket = [];

    closeIcon.classList.remove("active");
});