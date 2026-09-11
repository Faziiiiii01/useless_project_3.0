// 1. Turn on the webcam
const video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => { video.srcObject = stream; })
  .catch(err => alert("Camera access denied or unavailable: " + err));

// 2. Define personalities
const personalities = {
  angry: {
    label: "😠 ANGRY MIRROR",
    voice: { pitch: 0.6, rate: 1.2 },
    lines: [
      "WHY are you even looking at me right now?!",
      "You call THIS effort? Try again.",
      "I've seen puddles with more energy than you.",
      "Stop staring and go DO something!"
    ]
  },
  motivational: {
    label: "🔥 MOTIVATIONAL MIRROR",
    voice: { pitch: 1.1, rate: 1.0 },
    lines: [
      "You are capable of incredible things today.",
      "Look at you — showing up. That's how it starts.",
      "Every champion once looked in a mirror just like this.",
      "Today is yours. Go take it."
    ]
  },
  roast: {
    label: "🔥 ROAST MIRROR",
    voice: { pitch: 1.0, rate: 1.05 },
    lines: [
      "Did you dress in the dark, or is this intentional?",
      "That haircut is really committing to a bold choice.",
      "I've seen more focus in a Wi-Fi signal.",
      "You have main character energy... in a background role."
    ]
  },
  villain: {
    label: "😈 VILLAIN MIRROR",
    voice: { pitch: 0.5, rate: 0.85 },
    lines: [
      "Soon, the whole world will know your name... for the wrong reasons.",
      "You think you're the hero of this story?",
      "Excellent. Everything is going according to plan.",
      "Power isn't given. It's taken. What will YOU take today?"
    ]
  },
  compliment: {
    label: "✨ COMPLIMENT MIRROR",
    voice: { pitch: 1.15, rate: 0.95 },
    lines: [
      "Your smile could fix someone's whole day.",
      "You have such a calming presence.",
      "That outfit? Immaculate.",
      "Anyone would be lucky to know you."
    ]
  }
};

const frame = document.getElementById('mirrorFrame');
const nameEl = document.getElementById('personalityName');
const bubble = document.getElementById('speechBubble');
const btn = document.getElementById('triggerBtn');

function typeText(text) {
  bubble.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    bubble.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
}

function speak(text, voiceSettings) {
  window.speechSynthesis.cancel(); // stop any previous speech
  const utter = new SpeechSynthesisUtterance(text);
  utter.pitch = voiceSettings.pitch;
  utter.rate = voiceSettings.rate;
  window.speechSynthesis.speak(utter);
}

function activateRandomPersonality() {
  const keys = Object.keys(personalities);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const chosen = personalities[randomKey];
  const line = chosen.lines[Math.floor(Math.random() * chosen.lines.length)];

  // reset classes, apply new theme
  frame.className = "mirror-frame " + randomKey;
  nameEl.textContent = chosen.label;

  typeText(line);
  speak(line, chosen.voice);
}

btn.addEventListener('click', activateRandomPersonality);