function showWorkout(name, gifPath) {
  document.getElementById("workoutTitle").innerText = name;
  document.getElementById("workoutGif").src = gifPath;
  document.getElementById("workoutModal").style.display = "flex";
}

function closeWorkout() {
  document.getElementById("workoutModal").style.display = "none";
}
