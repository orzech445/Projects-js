const mealsContainer = document.getElementById("meals-container");

getRandomMeal();

async function getRandomMeal() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const responseData = await response.json();
    const randomMeal = responseData.meals[0];

    console.log(randomMeal);
}