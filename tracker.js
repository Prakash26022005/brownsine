function saveProgress() {
  let weight = document.getElementById("weight").value;
  if (!weight) return alert("Please enter your weight");

  let date = new Date().toLocaleDateString();

  let progress = JSON.parse(localStorage.getItem("progress")) || [];
  progress.push({ weight, date });

  localStorage.setItem("progress", JSON.stringify(progress));
  document.getElementById("weight").value = "";

  showProgress();
}

function showProgress() {
  let list = document.getElementById("progressList");
  list.innerHTML = "";

  let progress = JSON.parse(localStorage.getItem("progress")) || [];

  progress.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.date} • ${p.weight} kg`;
    list.appendChild(li);
  });
}

function resetProgress() {
  if (confirm("Are you sure you want to reset all progress?")) {
    localStorage.removeItem("progress");
    showProgress();
  }
}

showProgress();
