let selectedEmoji = "";
let selectedMood = "";

function selectMood(emoji, mood) {
  selectedEmoji = emoji;
  selectedMood = mood;
  document.getElementById("selectedMood").innerText =
    `Selected Mood: ${emoji} ${mood}`;
}

function saveMood() {
  if (!selectedMood) {
    alert("Please select a mood!");
    return;
  }

  const note = document.getElementById("note").value;
  const date = new Date().toLocaleDateString();

  const moodEntry = {
    date,
    emoji: selectedEmoji,
    mood: selectedMood,
    note
  };

  let moods = JSON.parse(localStorage.getItem("moods")) || [];
  moods.push(moodEntry);
  localStorage.setItem("moods", JSON.stringify(moods));

  document.getElementById("note").value = "";
  selectedMood = "";
  document.getElementById("selectedMood").innerText = "No mood selected";

  loadHistory();
}

function loadHistory() {
  const history = document.getElementById("history");
  history.innerHTML = "";

  let moods = JSON.parse(localStorage.getItem("moods")) || [];

  moods.reverse().forEach(m => {
    const li = document.createElement("li");
    li.innerText = `${m.date} — ${m.emoji} ${m.mood} : ${m.note}`;
    history.appendChild(li);
  });
}

loadHistory();
