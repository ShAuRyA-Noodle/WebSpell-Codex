import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* ================================ In-memory DB ================================ */
let jokes = [
  { id: 1, jokeText: "Why don't scientists trust atoms? Because they make up everything.", jokeType: "Science" },
  { id: 2, jokeText: "Why did the scarecrow win an award? Because he was outstanding in his field.", jokeType: "Puns" },
  { id: 3, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 4, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 5, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 6, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 7, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },
  { id: 8, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 9, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },
  { id: 10, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },

  { id: 11, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 12, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },
  { id: 13, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 14, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 15, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },

  { id: 16, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 17, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 18, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 19, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 20, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },

  { id: 21, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 22, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },
  { id: 23, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },
  { id: 24, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 25, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },

  { id: 26, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 27, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 28, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },
  { id: 29, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 30, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },

  { id: 31, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 32, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 33, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },
  { id: 34, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 35, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },

  { id: 36, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },
  { id: 37, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 38, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },
  { id: 39, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 40, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },

  { id: 41, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },
  { id: 42, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 43, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 44, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 45, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },

  { id: 46, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },
  { id: 47, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 48, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },
  { id: 49, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },
  { id: 50, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },

  { id: 51, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },
  { id: 52, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 53, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 54, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },
  { id: 55, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },

  { id: 56, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 57, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 58, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 59, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },
  { id: 60, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },

  { id: 61, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },
  { id: 62, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },
  { id: 63, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 64, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },
  { id: 65, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },

  { id: 66, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 67, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },
  { id: 68, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 69, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 70, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },

  { id: 71, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 72, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },
  { id: 73, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 74, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },
  { id: 75, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },

  { id: 76, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 77, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },
  { id: 78, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 79, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 80, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },

  { id: 81, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 82, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 83, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 84, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 85, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },

  { id: 86, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 87, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },
  { id: 88, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },
  { id: 89, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 90, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },

  { id: 91, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 92, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 93, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },
  { id: 94, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 95, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },

  { id: 96, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 97, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" },
  { id: 98, jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.", jokeType: "Puns" },
  { id: 99, jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.", jokeType: "Math" },
  { id: 100, jokeText: "What do you call fake spaghetti? An impasta!", jokeType: "Food" },

  { id: 101, jokeText: "Why did the tomato turn red? Because it saw the salad dressing!", jokeType: "Food" },
  { id: 102, jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!", jokeType: "Wordplay" },
  { id: 103, jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", jokeType: "Sports" },
  { id: 104, jokeText: "Why are ghosts bad at lying? Because you can see right through them!", jokeType: "Wordplay" },
  { id: 105, jokeText: "Why can't you give Elsa a balloon? Because she will let it go.", jokeType: "Movies" },
  { id: 106, jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!", jokeType: "Science" },
  { id: 107, jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.", jokeType: "Puns" },
  { id: 108, jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.", jokeType: "Wordplay" },
  { id: 109, jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.", jokeType: "Wordplay" },
  { id: 110, jokeText: "How do you organize a space party? You planet!", jokeType: "Science" }
];

const getNextId = () => jokes.length ? Math.max(...jokes.map(j => j.id)) + 1 : 1;

/* ================================ FRONTEND DASHBOARD ================================ */
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Tonight Show - Jokes API Studio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary: #FFD700;
      --secondary: #FF6B35;
      --dark: #1a1a2e;
      --darker: #0f0f1e;
      --light: #eef2ff;
      --accent: #00d4ff;
      --purple: #9333ea;
      --success: #10b981;
      --error: #ef4444;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
      color: var(--light);
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* Animated Background */
    body::before {
      content: '';
      position: fixed;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      z-index: 0;
      background: radial-gradient(circle, rgba(255,215,0,0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: backgroundMove 20s linear infinite;
    }

    @keyframes backgroundMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }

    /* Spotlight Effect */
    .spotlight {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
        rgba(255, 215, 0, 0.15) 0%, 
        transparent 50%);
      transition: opacity 0.3s;
    }

    .container {
      position: relative;
      z-index: 2;
      max-width: 1600px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    /* Header */
    .header {
      text-align: center;
      margin-bottom: 60px;
      position: relative;
    }

    .curtain {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 200px;
      background: linear-gradient(180deg, var(--secondary) 0%, transparent 100%);
      opacity: 0.1;
      border-radius: 0 0 50% 50%;
    }

    .stage-lights {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 30px;
    }

    .light {
      width: 80px;
      height: 80px;
      background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
      position: relative;
    }

    .light:nth-child(2) { animation-delay: 0.3s; }
    .light:nth-child(3) { animation-delay: 0.6s; }

    .light::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background: var(--primary);
      border-radius: 50%;
      box-shadow: 0 0 40px var(--primary);
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.1); }
    }

    h1 {
      font-size: 5rem;
      font-weight: 900;
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-transform: uppercase;
      letter-spacing: 8px;
      margin-bottom: 10px;
      animation: titleGlow 3s ease-in-out infinite;
      text-shadow: 0 0 80px rgba(255, 215, 0, 0.5);
    }

    @keyframes titleGlow {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.3); }
    }

    .subtitle {
      font-size: 1.8rem;
      color: var(--accent);
      font-weight: 300;
      letter-spacing: 4px;
      margin-bottom: 20px;
    }

    .tagline {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.6);
      font-style: italic;
    }

    /* Grid Layout */
    .api-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    /* Cards */
    .api-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border-radius: 30px;
      padding: 40px;
      border: 2px solid rgba(255, 215, 0, 0.2);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }

    .api-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
      transition: left 0.5s;
    }

    .api-card:hover::before {
      left: 100%;
    }

    .api-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: var(--primary);
      box-shadow: 0 30px 80px rgba(255, 215, 0, 0.3),
                  0 0 0 1px rgba(255, 215, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid rgba(255, 215, 0, 0.2);
    }

    .card-icon {
      font-size: 3rem;
      filter: drop-shadow(0 0 20px currentColor);
      animation: iconFloat 3s ease-in-out infinite;
    }

    @keyframes iconFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .card-title {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .card-subtitle {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 300;
    }

    /* Form Elements */
    .form-group {
      margin-bottom: 25px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    input, select, textarea {
      width: 100%;
      padding: 18px 24px;
      background: rgba(255, 255, 255, 0.08);
      border: 2px solid rgba(255, 215, 0, 0.2);
      border-radius: 15px;
      color: var(--light);
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s;
      backdrop-filter: blur(10px);
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.12);
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.3),
                  inset 0 0 20px rgba(255, 215, 0, 0.1);
      transform: scale(1.02);
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    /* Buttons */
    button {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: var(--darker);
      padding: 18px 40px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
      position: relative;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
    }

    button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    button:hover::before {
      width: 300px;
      height: 300px;
    }

    button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 20px 50px rgba(255, 215, 0, 0.6);
    }

    button:active {
      transform: translateY(-2px) scale(1.02);
    }

    .button-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    /* Results */
    .result {
      margin-top: 40px;
      padding: 35px 30px 30px 30px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      border: 2px solid rgba(255, 215, 0, 0.3);
      font-family: 'Courier New', monospace;
      font-size: 0.95rem;
      white-space: pre-wrap;
      word-wrap: break-word;
      max-height: 500px;
      overflow-y: auto;
      box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .result::before {
      content: 'RESPONSE';
      position: absolute;
      top: 8px;
      left: 20px;
      background: transparent;
      padding: 4px 12px;
      border-radius: 8px;
      font-size: 0.7rem;
      color: var(--primary);
      font-weight: 700;
      letter-spacing: 2px;
    }

    .result::-webkit-scrollbar {
      width: 10px;
    }

    .result::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }

    .result::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 10px;
    }

    .success {
      color: var(--success);
      border-color: var(--success);
    }

    .error {
      color: var(--error);
      border-color: var(--error);
    }

    /* Special Effects */
    .confetti {
      position: fixed;
      width: 10px;
      height: 10px;
      background: var(--primary);
      position: absolute;
      animation: confettiFall 3s linear;
    }

    @keyframes confettiFall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }

    /* Responsive */
    @media (max-width: 1200px) {
      .api-grid {
        grid-template-columns: 1fr;
      }
      
      h1 {
        font-size: 3.5rem;
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
        letter-spacing: 4px;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .api-card {
        padding: 25px;
      }

      .card-title {
        font-size: 1.5rem;
      }
    }

    /* Loading Animation */
    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 215, 0, 0.3);
      border-radius: 50%;
      border-top-color: var(--primary);
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Mic Icon Animation */
    .mic-container {
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      box-shadow: 0 10px 40px rgba(255, 215, 0, 0.5);
      animation: micPulse 2s ease-in-out infinite;
      cursor: pointer;
      z-index: 1000;
    }

    @keyframes micPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    .mic-container:hover {
      transform: scale(1.2) rotate(15deg);
    }

    /* Nuclear Zone Styling */
    .nuclear-zone {
      border: 3px solid #ef4444 !important;
      box-shadow: 0 20px 60px rgba(239, 68, 68, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      animation: dangerPulse 2s ease-in-out infinite;
    }

    @keyframes dangerPulse {
      0%, 100% { 
        box-shadow: 0 20px 60px rgba(239, 68, 68, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
      50% { 
        box-shadow: 0 20px 80px rgba(239, 68, 68, 0.6),
                    0 0 40px rgba(239, 68, 68, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
    }

    .warning-banner {
      background: rgba(239, 68, 68, 0.1);
      border: 2px solid #ef4444;
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      gap: 15px;
      animation: warningBlink 1.5s ease-in-out infinite;
    }

    @keyframes warningBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .warning-banner strong {
      color: #ef4444;
      font-size: 1.1rem;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
  </style>
</head>
<body>
  <div class="spotlight"></div>
  
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="curtain"></div>
      <div class="stage-lights">
        <div class="light"></div>
        <div class="light"></div>
        <div class="light"></div>
      </div>
      <h1>JOKES API</h1>
      <p class="subtitle">The Tonight Show Studio</p>
      <p class="tagline">"Where laughter meets code, and every endpoint is a punchline"</p>
    </div>

    <!-- GET Routes Section -->
    <div class="api-grid">
      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">🎲</div>
          <div>
            <div class="card-title">Random Joke</div>
            <div class="card-subtitle">GET /random</div>
          </div>
        </div>
        <button onclick="getRandomJoke()">🎭 Get Random Joke</button>
        <div id="randomResult" class="result"></div>
      </div>

      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">🔍</div>
          <div>
            <div class="card-title">Get By ID</div>
            <div class="card-subtitle">GET /jokes/:id</div>
          </div>
        </div>
        <div class="form-group">
          <label>🎯 Joke ID</label>
          <input type="number" id="getById" placeholder="Enter ID (e.g., 1)" value="1">
        </div>
        <button onclick="getJokeById()">🚀 Fetch Joke</button>
        <div id="getByIdResult" class="result"></div>
      </div>

      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">📚</div>
          <div>
            <div class="card-title">Get By Type</div>
            <div class="card-subtitle">GET /jokes/type/:type</div>
          </div>
        </div>
        <div class="form-group">
          <label>🎪 Joke Category</label>
          <select id="getByType">
            <option value="Science">🧪 Science</option>
            <option value="Puns">😄 Puns</option>
            <option value="Wordplay">📝 Wordplay</option>
            <option value="Math">🔢 Math</option>
            <option value="Food">🍕 Food</option>
          </select>
        </div>
        <button onclick="getJokesByType()">🎨 Get Category</button>
        <div id="getByTypeResult" class="result"></div>
      </div>
    </div>

    <!-- POST Route -->
    <div class="api-grid">
      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">✨</div>
          <div>
            <div class="card-title">Create New Joke</div>
            <div class="card-subtitle">POST /jokes</div>
          </div>
        </div>
        <div class="form-group">
          <label>💬 Joke Text</label>
          <textarea id="postJokeText" placeholder="Enter your hilarious joke here...">Why did the developer go broke? Because he used up all his cache!</textarea>
        </div>
        <div class="form-group">
          <label>🏷️ Joke Type</label>
          <input type="text" id="postJokeType" placeholder="e.g., Programming" value="Programming">
        </div>
        <button onclick="createJoke()">🎬 Create Joke</button>
        <div id="postResult" class="result"></div>
      </div>

      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">🔄</div>
          <div>
            <div class="card-title">Replace Joke</div>
            <div class="card-subtitle">PUT /jokes/:id</div>
          </div>
        </div>
        <div class="form-group">
          <label>🎯 Target ID</label>
          <input type="number" id="putId" placeholder="Enter ID to replace" value="1">
        </div>
        <div class="form-group">
          <label>💬 New Joke Text</label>
          <textarea id="putJokeText" placeholder="Enter replacement joke...">Why did the math book look sad? Because it had too many problems!</textarea>
        </div>
        <div class="form-group">
          <label>🏷️ New Type</label>
          <input type="text" id="putJokeType" placeholder="e.g., Math" value="Math">
        </div>
        <button onclick="replaceJoke()">♻️ Replace</button>
        <div id="putResult" class="result"></div>
      </div>
    </div>

    <!-- PATCH & DELETE Routes -->
    <div class="api-grid">
      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">✏️</div>
          <div>
            <div class="card-title">Update Joke</div>
            <div class="card-subtitle">PATCH /jokes/:id</div>
          </div>
        </div>
        <div class="form-group">
          <label>🎯 Joke ID</label>
          <input type="number" id="patchId" placeholder="Enter ID" value="1">
        </div>
        <div class="form-group">
          <label>💬 New Text (Optional)</label>
          <textarea id="patchJokeText" placeholder="Leave empty to keep current text"></textarea>
        </div>
        <div class="form-group">
          <label>🏷️ New Type (Optional)</label>
          <input type="text" id="patchJokeType" placeholder="Leave empty to keep current type">
        </div>
        <button onclick="updateJoke()">🎨 Update</button>
        <div id="patchResult" class="result"></div>
      </div>

      <div class="api-card">
        <div class="card-header">
          <div class="card-icon">🗑️</div>
          <div>
            <div class="card-title">Delete Joke</div>
            <div class="card-subtitle">DELETE /jokes/:id</div>
          </div>
        </div>
        <div class="form-group">
          <label>🎯 Joke ID to Delete</label>
          <input type="number" id="deleteId" placeholder="Enter ID" value="1">
        </div>
        <button onclick="deleteJoke()">💥 Delete</button>
        <div id="deleteResult" class="result"></div>
      </div>
    </div>
    <!-- NUCLEAR DELETE SECTION -->
    <div class="api-card nuclear-zone">
      <div class="card-header">
        <div class="card-icon">☢️</div>
        <div>
          <div class="card-title" style="color: #ef4444;">DANGER ZONE</div>
          <div class="card-subtitle">DELETE /all?key=yourkey</div>
        </div>
      </div>
      <div class="warning-banner">
        <span style="font-size: 2rem;">⚠️</span>
        <div>
          <strong>WARNING:</strong> This will delete ALL jokes permanently!
        </div>
      </div>
      <div class="form-group">
        <label style="color: #ef4444;">🔐 Master Key</label>
        <input type="text" id="masterKeyInput" placeholder="Enter master key..." style="border-color: #ef4444;">
        <small style="color: rgba(255,255,255,0.5); display: block; margin-top: 8px;">
          Hint: Check the code for the master key 😉
        </small>
      </div>
      <button onclick="deleteAll()" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);">
        💥 DELETE ALL JOKES
      </button>
      <div id="deleteAllResult" class="result"></div>
    </div>

  </div>

  <!-- Floating Mic Icon -->
  <div class="mic-container" title="You're on air! 🎙️">🎤</div>

  <script>
    // Spotlight effect
    document.addEventListener('mousemove', (e) => {
      const spotlight = document.querySelector('.spotlight');
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      spotlight.style.setProperty('--x', x + '%');
      spotlight.style.setProperty('--y', y + '%');
    });

    function display(elementId, data, isError = false) {
      const el = document.getElementById(elementId);
      el.innerHTML = JSON.stringify(data, null, 2);
      el.className = 'result ' + (isError ? 'error' : 'success');
      
      // Add confetti on success
      if (!isError) {
        createConfetti(el);
      }
    }

    function createConfetti(element) {
      for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = ['#FFD700', '#FF6B35', '#00d4ff'][Math.floor(Math.random() * 3)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        element.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }
    }

    async function getRandomJoke() {
      try {
        const res = await fetch('/random');
        const data = await res.json();
        display('randomResult', data);
      } catch (err) {
        display('randomResult', { error: err.message }, true);
      }
    }

    async function getJokeById() {
      const id = document.getElementById('getById').value;
      try {
        const res = await fetch('/jokes/' + id);
        const data = await res.json();
        display('getByIdResult', data, !res.ok);
      } catch (err) {
        display('getByIdResult', { error: err.message }, true);
      }
    }

    async function getJokesByType() {
      const type = document.getElementById('getByType').value;
      try {
        const res = await fetch('/jokes/type/' + type);
        const data = await res.json();
        display('getByTypeResult', data, !res.ok);
      } catch (err) {
        display('getByTypeResult', { error: err.message }, true);
      }
    }

    async function createJoke() {
      const jokeText = document.getElementById('postJokeText').value;
      const jokeType = document.getElementById('postJokeType').value;
      try {
        const res = await fetch('/jokes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jokeText, jokeType })
        });
        const data = await res.json();
        display('postResult', data);
      } catch (err) {
        display('postResult', { error: err.message }, true);
      }
    }

    async function replaceJoke() {
      const id = document.getElementById('putId').value;
      const jokeText = document.getElementById('putJokeText').value;
      const jokeType = document.getElementById('putJokeType').value;
      try {
        const res = await fetch('/jokes/' + id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jokeText, jokeType })
        });
        const data = await res.json();
        display('putResult', data, !res.ok);
      } catch (err) {
        display('putResult', { error: err.message }, true);
      }
    }

    async function updateJoke() {
      const id = document.getElementById('patchId').value;
      const jokeText = document.getElementById('patchJokeText').value;
      const jokeType = document.getElementById('patchJokeType').value;
      const body = {};
      if (jokeText) body.jokeText = jokeText;
      if (jokeType) body.jokeType = jokeType;
      try {
        const res = await fetch('/jokes/' + id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        display('patchResult', data, !res.ok);
      } catch (err) {
        display('patchResult', { error: err.message }, true);
      }
    }

    async function deleteJoke() {
      const id = document.getElementById('deleteId').value;
      try {
        const res = await fetch('/jokes/' + id, {
          method: 'DELETE'
        });
        const data = await res.json();
        display('deleteResult', data, !res.ok);
      } catch (err) {
        display('deleteResult', { error: err.message }, true);
      }
    }

    async function deleteAll() {
      const masterKey = document.getElementById('masterKeyInput').value;
      
      if (!masterKey) {
        display('deleteAllResult', { error: 'Master key required!' }, true);
        return;
      }

      try {
        const res = await fetch('/all?key=' + masterKey, {
          method: 'DELETE'
        });
        const data = await res.json();
        display('deleteAllResult', data, !res.ok);
      } catch (err) {
        display('deleteAllResult', { error: err.message }, true);
      }
    }

    // Auto-load random joke on page load
    window.addEventListener('load', () => {
      setTimeout(getRandomJoke, 500);
    });
  </script>
</body>
</html>
  `);
});

/* ================================ GET Routes ================================ */

// Get random joke
app.get("/random", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

// Get joke by ID
app.get("/jokes/:id", (req, res) => {
  const joke = jokes.find(j => j.id === parseInt(req.params.id));
  if (!joke) return res.status(404).json({ error: "Joke not found" });
  res.json(joke);
});

// Get jokes by type
app.get("/jokes/type/:type", (req, res) => {
  const type = req.params.type;
  const filteredJokes = jokes.filter(j => j.jokeType.toLowerCase() === type.toLowerCase());
  if (filteredJokes.length === 0) {
    return res.status(404).json({ error: "No jokes found for this type" });
  }
  res.json(filteredJokes);
});

/* ================================ POST ================================ */
app.post("/jokes", (req, res) => {
  const { jokeText, jokeType } = req.body;
  if (!jokeText || !jokeType) {
    return res.status(400).json({ error: "jokeText and jokeType are required" });
  }
  const newJoke = { id: getNextId(), jokeText, jokeType };
  jokes.push(newJoke);
  res.status(201).json(newJoke);
});

/* ================================ PUT ================================ */
app.put("/jokes/:id", (req, res) => {
  const index = jokes.findIndex(j => j.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Joke not found" });
  
  const { jokeText, jokeType } = req.body;
  if (!jokeText || !jokeType) {
    return res.status(400).json({ error: "jokeText and jokeType are required" });
  }
  
  jokes[index] = { id: parseInt(req.params.id), jokeText, jokeType };
  res.json(jokes[index]);
});

/* ================================ PATCH ================================ */
app.patch("/jokes/:id", (req, res) => {
  const joke = jokes.find(j => j.id === parseInt(req.params.id));
  if (!joke) return res.status(404).json({ error: "Joke not found" });
  
  Object.assign(joke, req.body);
  res.json(joke);
});

/* ================================ DELETE ================================ */
app.delete("/jokes/:id", (req, res) => {
  const index = jokes.findIndex(j => j.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Joke not found" });
  
  const deletedJoke = jokes.splice(index, 1)[0];
  res.json({ message: "Joke deleted successfully", joke: deletedJoke });
});

/* ================================ DELETE ALL (Master Key Required) ================================ */
const masterKey = "4EVERGreen"; // Angela Yu style - simple master key

app.delete("/all", (req, res) => {
  const { key } = req.query;
  
  if (key === masterKey) {
    const count = jokes.length;
    jokes = [];
    res.json({ 
      message: "All jokes deleted successfully! 💥", 
      deletedCount: count 
    });
  } else {
    res.status(401).json({ error: "Wrong master key! ❌" });
  }
});

app.listen(port, () => console.log(`🚀 The Tonight Show - Jokes API is LIVE on http://localhost:${port}`));