const startButton = document.getElementById("startButton");
const output = document.getElementById("output");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.continuous = true;
recognition.interimResults = true;

let listening = false;

startButton.addEventListener("click", () => {
  if (!listening) {
    startButton.textContent = "Stop Listening";
    recognition.start();
  } else {
    startButton.textContent = "Start Listening";
    recognition.stop();
  }
  listening = !listening;
});

recognition.onresult = event => {
  const transcript = event.results[event.results.length - 1][0].transcript;
  output.textContent = transcript;
  readText(transcript);
};

