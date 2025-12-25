/* ---------------- FOOD RECIPES ---------------- */
const foodRecipes = {
  "Oats with Milk": `
1. Add oats to boiling milk.
2. Cook on low flame for 5 minutes.
3. Stir continuously to avoid sticking.
4. Add fruits or nuts if needed.
5. Serve warm for best nutrition.
`,

  "Banana": `
1. Peel the banana properly.
2. Eat directly as a snack.
3. Can be sliced into oats.
4. Can be blended into smoothies.
5. Best eaten fresh.
`,

  "Rice & Dal": `
1. Wash rice and dal separately.
2. Cook rice until soft.
3. Pressure cook dal with spices.
4. Mix rice and dal together.
5. Serve hot with vegetables.
`,

  "Curd": `
1. Take fresh curd.
2. Add pinch of salt if needed.
3. Mix well.
4. Consume after lunch.
5. Helps digestion.
`,

  "Chapati & Veg Curry": `
1. Prepare chapati using wheat flour.
2. Cook mixed vegetables.
3. Add spices lightly.
4. Serve chapati with curry.
5. Eat warm.
`,

  "Milk": `
1. Heat milk until warm.
2. Do not boil too much.
3. Drink slowly.
4. Best before sleep.
5. Helps muscle recovery.
`,

  "Boiled Eggs": `
1. Place eggs in boiling water.
2. Boil for 8–10 minutes.
3. Remove shell.
4. Sprinkle salt & pepper.
5. Eat warm.
`,

  "Brown Rice & Chicken": `
1. Cook brown rice separately.
2. Marinate chicken with spices.
3. Grill or pan-cook chicken.
4. Combine with rice.
5. Serve hot.
`,

  "Chapati & Paneer": `
1. Make chapati using wheat flour.
2. Lightly sauté paneer with spices.
3. Serve chapati with paneer.
4. Eat warm.
5. Optional: add salad.
`,

  "Salad": `
1. Chop fresh vegetables.
2. Add lemon juice.
3. Sprinkle salt lightly.
4. Mix gently.
5. Eat fresh.
`,

  "Oats (Water)": `
1. Cook oats in water.
2. Stir occasionally.
3. Add seeds or nuts for flavor.
4. Serve warm.
5. Helps control calories.
`,

  "Green Tea": `
1. Boil water.
2. Steep green tea leaves for 2–3 minutes.
3. Pour into cup.
4. Optionally add lemon.
5. Drink hot.
`,

  "Grilled Chicken/Fish": `
1. Marinate chicken or fish with spices.
2. Grill until cooked.
3. Serve with salad or vegetables.
4. Eat hot.
5. Helps protein intake.
`,

  "Vegetable Soup": `
1. Chop vegetables.
2. Boil in water.
3. Add light spices.
4. Simmer for 10 minutes.
5. Serve hot.
`,

  "Boiled Vegetables": `
1. Chop vegetables.
2. Steam until soft.
3. Add minimal seasoning.
4. Serve warm.
5. Eat fresh.
`
};

/* ---------------- MAIN FUNCTION ---------------- */
function suggestDiet() {
  const weight = document.getElementById("userWeight").value;
  const meal = document.getElementById("mealTime").value;
  const title = document.getElementById("dietTitle");
  const container = document.getElementById("foodSuggestions");

  container.innerHTML = "";

  if (!weight || !meal) {
    alert("Please enter weight and select meal time");
    return;
  }

  let foods = [];

  /* 🔵 UNDER 60 KG */
  if (weight < 60) {
    title.innerText = "Goal: Healthy Weight Gain";

    if (meal === "breakfast") {
      foods = [
        { name: "Oats with Milk", reason: "High calories & fiber", img: "d:/1/Diet/oatswithmilk.jpg" },
        { name: "Banana", reason: "Energy booster", img: "d:/1/Diet/banana.jpg" }
      ];
    } else if (meal === "lunch") {
      foods = [
        { name: "Rice & Dal", reason: "Carbs + protein", img: "d:/1/Diet/rice.jpg" },
        { name: "Curd", reason: "Digestive health", img: "d:/1/Diet/curd.jpg" }
      ];
    } else {
      foods = [
        { name: "Chapati & Veg Curry", reason: "Balanced nutrition", img: "d:/1/Diet/chapati.jpg" },
        { name: "Milk", reason: "Protein & recovery", img: "d:/1/Diet/milk.jpg" }
      ];
    }
  }

  /* 🟢 60–80 KG */
  else if (weight >= 60 && weight <= 80) {
    title.innerText = "Goal: Maintain Healthy Body";

    if (meal === "breakfast") {
      foods = [
        { name: "Boiled Eggs", reason: "Lean protein", img: "d:/1/Diet/boiled.jpg" },
        { name: "Brown Bread", reason: "Complex carbs", img: "d:/1/Diet/brown.jpg" }
      ];
    } else if (meal === "lunch") {
      foods = [
        { name: "Brown Rice & Chicken", reason: "Protein & energy", img: "d:/1/Diet/brown2.jpg" },
        { name: "Vegetables", reason: "Fiber & vitamins", img: "d:/1/Diet/vegetable.jpg" }
      ];
    } else {
      foods = [
        { name: "Chapati & Paneer", reason: "Protein rich", img: "d:/1/Diet/chapati2.jpg" },
        { name: "Salad", reason: "Light & nutritious", img: "d:/1/Diet/salad.jpg" }
      ];
    }
  }

  /* 🔴 ABOVE 80 KG */
  else {
    title.innerText = "Goal: Fat Loss & Control";

    if (meal === "breakfast") {
      foods = [
        { name: "Oats (Water)", reason: "Low calorie & filling", img: "d:/1/Diet/oats2.jpg" },
        { name: "Green Tea", reason: "Boost metabolism", img: "d:/1/Diet/green.jpg" }
      ];
    } else if (meal === "lunch") {
      foods = [
        { name: "Grilled Chicken/Fish", reason: "High protein", img: "d:/1/Diet/grilled.jpg" },
        { name: "Salad", reason: "Low carb", img: "d:/1/Diet/salad.jpg" }
      ];
    } else {
      foods = [
        { name: "Vegetable Soup", reason: "Light dinner", img: "d:/1/Diet/vegetable2.jpg" },
        { name: "Boiled Vegetables", reason: "Easy digestion", img: "d:/1/Diet/boiled2.jpg" }
      ];
    }
  }

  /* ---------------- RENDER FOOD ---------------- */
  foods.forEach((food, index) => {
    const card = document.createElement("div");
    card.className = "food-card";
    const foodId = `food-${index}`;
    card.id = foodId;

    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}" onclick="scrollToRecipe('${foodId}')">
      <h3>${food.name}</h3>
      <p>${food.reason}</p>
      <pre class="food-recipe">
${foodRecipes[food.name] || "Healthy and simple preparation steps."}
      </pre>
    `;

    container.appendChild(card);
  });
}

/* ---------------- SCROLL FUNCTION ---------------- */
function scrollToRecipe(foodId) {
  const card = document.getElementById(foodId);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("highlight");
    setTimeout(() => card.classList.remove("highlight"), 1500);
  }
}
