const mealsContainer = document.getElementById("meals-container");

getRandomMeal();

async function getRandomMeal() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const responseData = await response.json();
    const randomMeal = responseData.meals[0];

    addMeal(randomMeal);
}

async function getMealById(id) {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

    const responseData = await response.json();
    const mealId = responseData.meals[0];

    return mealId;
}

function addMeal(mealData) {
    console.log(mealData);

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
                <div class="meal-header">
                <span>Random Recipe</span>
                    <img 
                        src="${mealData.strMealThumb}" 
                        alt="${mealData.strMeal}" 
                    />
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="fav-btn">
                        <i class="fa fa-heart"></i>
                    </button>
                </div>
    `;

    const btn = meal.querySelector(".meal-body .fav-btn");

    btn.addEventListener("click", () => {
        // add to fav list
        // remove from fav list
    });

    mealsContainer.appendChild(meal);
}

function addMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId)));
}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}