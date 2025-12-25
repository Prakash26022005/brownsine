const foods = {
  "Rice (Cooked)": { calories: 130, protein: 2.7 },
  "Chapati": { calories: 120, protein: 3 },
  "Idli": { calories: 58, protein: 2 },
  "Dosa": { calories: 168, protein: 4 },
  "Egg": { calories: 155, protein: 13 },
  "Boiled Egg": { calories: 78, protein: 6 },
  "Chicken Breast": { calories: 165, protein: 31 },
  "Fish Curry": { calories: 180, protein: 22 },
  "Paneer": { calories: 265, protein: 18 },
  "Curd": { calories: 98, protein: 11 },
  "Milk": { calories: 60, protein: 3 },
  "Dal": { calories: 116, protein: 9 },
  "Rajma": { calories: 127, protein: 9 },
  "Chickpeas": { calories: 164, protein: 9 },
  "Vegetable Curry": { calories: 90, protein: 3 },
  "Potato": { calories: 77, protein: 2 },
  "Banana": { calories: 89, protein: 1.1 },
  "Apple": { calories: 52, protein: 0.3 },
  "Orange": { calories: 47, protein: 0.9 },
  "Peanuts": { calories: 567, protein: 26 },
  "Almonds": { calories: 579, protein: 21 },
  "Cashews": { calories: 553, protein: 18 },
  "Upma": { calories: 192, protein: 5 },
  "Poha": { calories: 180, protein: 4 },
  "Sambar": { calories: 76, protein: 5 },
  "Vada": { calories: 198, protein: 4 },
  "Pulao": { calories: 220, protein: 6 },
  "Biryani": { calories: 290, protein: 15 },
  "Fish Fry": { calories: 240, protein: 25 },
  "Chicken Curry": { calories: 250, protein: 27 }
};

let totalCalories = 0;
let totalProtein = 0;

// Populate dropdown
const foodSelect = document.getElementById("food");
for (let item in foods) {
  let option = document.createElement("option");
  option.value = item;
  option.textContent = item;
  foodSelect.appendChild(option);
}

function addFood() {
  const food = foodSelect.value;
  const qty = document.getElementById("quantity").value;

  if (!food || !qty) {
    alert("Select food and quantity");
    return;
  }

  const factor = qty / 100;
  const calories = (foods[food].calories * factor).toFixed(1);
  const protein = (foods[food].protein * factor).toFixed(1);

  totalCalories += parseFloat(calories);
  totalProtein += parseFloat(protein);

  document.getElementById("totalCalories").innerText = totalCalories.toFixed(1);
  document.getElementById("totalProtein").innerText = totalProtein.toFixed(1);

  const li = document.createElement("li");
  li.textContent = `${food} (${qty}g) → ${calories} kcal | ${protein}g protein`;
  document.getElementById("foodList").appendChild(li);

  document.getElementById("quantity").value = "";
}

function resetTracker() {
  totalCalories = 0;
  totalProtein = 0;
  document.getElementById("totalCalories").innerText = "0";
  document.getElementById("totalProtein").innerText = "0";
  document.getElementById("foodList").innerHTML = "";
}
