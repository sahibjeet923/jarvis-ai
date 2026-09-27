const input = document.getElementById("input");
const send = document.getElementById("send");
const mic = document.getElementById("mic");
const chat = document.getElementById("chat");

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.textContent = text;
  chat.appendChild(msg);
}

function jarvisReply(text) {
  const q = text.toLowerCase();
  let reply = "I heard you. My AI brain is coming soon.";

  if (q.includes("hello") || q.includes("hi")) {
    reply = "Hello. I am JARVIS.";
  }

  if (q.includes("time")) {
    reply = "The time is " + new Date().toLocaleTimeString();
  }

  addMessage(reply, "jarvis");
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  jarvisReply(text);
}

send.onclick = sendMessage;

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") sendMessage();
});
