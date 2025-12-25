function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  if (!weight || !heightCm) {
    alert("Please enter valid height and weight");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let status = "";
  let advice = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    color = "#ffffffff";
    advice = `
      Focus on healthy weight gain:
      <ul>
        <li>Increase calorie intake gradually</li>
        <li>Eat rice, oats, milk, nuts</li>
        <li>Strength training 3–4 days/week</li>
        <li>Get quality sleep</li>
      </ul>
    `;
  } 
  else if (bmi < 25) {
    status = "Normal";
    color = "#ffffffff";
    advice = `
      Maintain your fitness:
      <ul>
        <li>Balanced diet</li>
        <li>Regular workouts</li>
        <li>Light cardio and stretching</li>
        <li>Stay hydrated</li>
      </ul>
    `;
  } 
  else if (bmi < 30) {
    status = "Overweight";
    color = "#fffffff";
    advice = `
      Focus on fat reduction:
      <ul>
        <li>Reduce sugar and fried foods</li>
        <li>High protein meals</li>
        <li>Daily cardio 30–40 minutes</li>
        <li>Strength training</li>
      </ul>
    `;
  } 
  else {
    status = "Obese";
    color = "#ffffffff";
    advice = `
      Health improvement plan:
      <ul>
        <li>Strict calorie control</li>
        <li>Avoid junk food</li>
        <li>Daily walking</li>
        <li>Beginner workouts</li>
      </ul>
    `;
  }

  document.getElementById("bmiValue").innerHTML = `Your BMI: <b>${bmi}</b>`;
  document.getElementById("bmiStatus").innerText = status;
  document.getElementById("bmiStatus").style.color = color;
  document.getElementById("bmiAdvice").innerHTML = advice;
  document.querySelector(".result").style.display = "block";

}
