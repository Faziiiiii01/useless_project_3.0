<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# AI Mirror 🎭🪞

> **A mirror that doesn't just show your face — it judges your personality.**

## Basic Details

### Team Name: [Your Team Name]

### Team Members

* **Team Lead:** Muhammed Fazin - MES College of Engineering and Technology, Kunnukara
* **Member 2:** Muhammed Jibran - MES College of Engineering and Technology, Kunnukara

---

## Project Description

**AI Mirror** is a fun browser-based interactive mirror that uses your webcam to create different personality experiences.

Instead of simply showing your reflection, the mirror randomly becomes **Angry, Motivational, Roast, Villain, or Compliment mode**, displays a funny personality-specific message, speaks it aloud, and adds visual effects to your face.

---

## The Problem (that doesn't exist)

People already have normal mirrors.

But what if your mirror doesn't have enough personality?

What if you look into the mirror every morning and nobody is there to:

* Judge your appearance 👀
* Give you unnecessary motivation 💪
* Roast you for no reason 🔥
* Tell you that you're secretly a villain 😈
* Give you compliments you didn't ask for ✨

**This extremely serious problem needed an extremely unnecessary solution.**

---

## The Solution (that nobody asked for)

We created **AI Mirror** — a mirror with multiple personalities.

When you click **"Look Into The Mirror"**, the system randomly selects a personality and transforms the mirror accordingly.

### Personality Modes

😡 **Angry Mode**
The mirror becomes angry and gives you an attitude-filled message.

💪 **Motivational Mode**
The mirror tries to make you feel powerful and motivated.

🔥 **Roast Mode**
The mirror gives you an unnecessary roast.

😈 **Villain Mode**
The mirror transforms into a villain-themed experience with glowing eyes.

✨ **Compliment Mode**
The mirror gives you a compliment and adds sparkling visual effects.

---

# Technical Details

## Technologies/Components Used

### For Software

**Languages Used**

* HTML
* CSS
* JavaScript

**Frameworks Used**

* None
* Vanilla Web Development

**Libraries / APIs Used**

* **face-api.js** — face detection and facial landmark detection
* **Web Speech API** — text-to-speech
* **MediaDevices API / getUserMedia()** — webcam access

**Tools Used**

* Visual Studio Code
* Live Server
* Git
* GitHub
* Google Chrome / Microsoft Edge

---

### For Hardware

**Main Components**

* Laptop / Desktop computer
* Built-in or external webcam
* Speakers

**Specifications**

* Working webcam
* Modern web browser
* Internet connection for initial setup
* Device capable of running JavaScript and webcam applications

**Tools Required**

* No additional hardware required

---

# Implementation

## For Software

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Move into the project folder:

```bash
cd FJ
```

No additional Python or Node.js installation is required.

The project uses browser-based JavaScript libraries.

### Required Project Structure

```text
FJ/
│
├── index.html
├── style.css
├── script.js
│
└── models/
    ├── tiny_face_detector_model-weights_manifest.json
    ├── tiny_face_detector_model-shard1
    ├── face_landmark_68_model-weights_manifest.json
    └── face_landmark_68_model-shard1
```

### Run

1. Open the project in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Open the project in Chrome or Edge.
6. Allow webcam permission.
7. Click:

```text
LOOK INTO THE MIRROR
```

8. Experience the randomly selected personality.

---

# How It Works

The project follows this basic workflow:

```text
          ┌──────────────────┐
          │   Open Website   │
          └────────┬─────────┘
                   │
                   ▼
          ┌──────────────────┐
          │  Access Webcam   │
          └────────┬─────────┘
                   │
                   ▼
          ┌──────────────────┐
          │ Look Into Mirror │
          └────────┬─────────┘
                   │
                   ▼
          ┌──────────────────┐
          │ Select Personality│
          └────────┬─────────┘
                   │
        ┌──────────┼───────────┐
        ▼          ▼           ▼
     Angry     Motivational   Roast
        │          │           │
        └──────────┼───────────┘
                   │
             ┌─────┴─────┐
             ▼           ▼
          Villain    Compliment
             │           │
             ▼           ▼
       Face Effects   Face Effects
             │           │
             └─────┬─────┘
                   ▼
          ┌──────────────────┐
          │ Message + Voice  │
          └──────────────────┘
```

### Face Detection

For **Villain** and **Compliment** modes, `face-api.js` detects the user's face and facial landmarks through the webcam.

The detected landmark positions are then used to place visual effects around the user's face.

For example:

* Villain → glowing effects around the eyes
* Compliment → sparkle effects around the face

---

# Project Documentation

## Screenshots

### Screenshot 1 — AI Mirror Home Screen

![AI Mirror Home Screen](screenshots/home.png)

*The main interface of the AI Mirror before activating a personality.*

### Screenshot 2 — Villain Mode

![Villain Mode](screenshots/villain.png)

*Villain mode applies a dramatic visual theme and glowing eye effects using facial landmark detection.*

### Screenshot 3 — Compliment Mode

![Compliment Mode](screenshots/compliment.png)

*Compliment mode displays a positive message and adds sparkling visual effects around the user's face.*

> **Note:** Make sure these three images actually exist in the `screenshots` folder of your GitHub repository.

---

# Diagrams

### System Workflow

```text
User
 │
 ▼
Webcam
 │
 ▼
JavaScript Application
 │
 ├── Personality Selection
 │
 ├── Face Detection
 │
 ├── Facial Landmarks
 │
 ├── Visual Effects
 │
 └── Speech Synthesis
 │
 ▼
Interactive AI Mirror
```

*The workflow shows how webcam input is processed by the browser application to create the interactive mirror experience.*

---

# Key Features

* 🎥 Real-time webcam access
* 🤖 AI-based face detection
* 👤 Facial landmark detection
* 🎭 Five different personality modes
* 🔥 Random personality selection
* 🗣️ Text-to-speech responses
* ✨ Animated visual effects
* 😈 Villain glowing-eye effect
* 💫 Compliment sparkle effect
* ⌨️ Interactive browser interface
* 💻 No backend server required

---

# Project Demo

## Video

[Add your demo video link here]

*The demo shows the AI Mirror accessing the webcam, selecting different personalities, displaying personality-specific messages, speaking the messages, and applying facial visual effects.*

## Additional Demos

* GitHub Repository: [Add repository link]
* Live Demo: [Add live demo link if available]
* Presentation: [Add presentation link if available]

---

# Team Contributions

* **Muhammed Fazin:** Project concept, frontend development, JavaScript implementation, personality modes, and overall project development.
* **Muhammed Jibran:** Face detection integration, visual effects, testing, and project documentation.

---

# Future Scope

Although this project was intentionally created as a useless/fun project, it could be extended with:

* 🧠 Real emotion detection
* 🎭 More AI personalities
* 🎤 Voice-controlled interaction
* 😊 Emotion-based responses
* 🪞 Full-screen smart mirror interface
* 🎨 More real-time face effects
* 🤖 AI-generated personalized messages
* 📱 Mobile/web-app version
* 📊 Mood history and analytics

---

# Why AI Mirror?
Because sometimes you don't need an AI assistant.

You need an AI mirror that roasts you before you start your day. 😭🔥

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)



