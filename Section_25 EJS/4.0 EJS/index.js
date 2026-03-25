/***************************************************************
 *  STEP 1 — Import Express
 ***************************************************************
 * We import the Express framework.
 * Express is a Node.js library that helps us:
 *  - Create a web server
 *  - Handle HTTP requests (GET, POST, etc.)
 *  - Send responses (HTML, JSON, files)
 *
 * This is like the "engine" of our website.
 ***************************************************************/
import express from "express";


/***************************************************************
 *  STEP 2 — Create an Express application
 ***************************************************************
 * express() creates a new web server instance.
 * The variable `app` now represents our whole backend server.
 *
 * Think of `app` like:
 *   → A virtual computer that waits for people
 *     to visit your website.
 ***************************************************************/
const app = express();


/***************************************************************
 *  STEP 3 — Define the port
 ***************************************************************
 * A port is a "door" on your computer where web traffic enters.
 *
 * 3000 is a commonly used development port.
 * When someone visits:
 *     http://localhost:3000
 * they are talking to THIS app.
 ***************************************************************/
const port = 3000;


/***************************************************************
 *  STEP 4 — Tell Express we are using EJS
 ***************************************************************
 * EJS = Embedded JavaScript Templates
 *
 * This line tells Express:
 *  "When I say res.render(), use EJS files from the 'views' folder"
 *
 * This allows us to:
 *   - Put JavaScript variables inside HTML
 *   - Dynamically change content
 ***************************************************************/
app.set("view engine", "ejs");


/***************************************************************
 *  STEP 5 — Handle a request to the homepage "/"
 ***************************************************************
 * app.get("/", ...) means:
 *   "When a browser sends a GET request to / (home page),
 *    run this function"
 *
 * req = request (data from browser)
 * res = response (what we send back)
 ***************************************************************/
app.get("/", (req, res) => {

  /***************************************************************
   * STEP 6 — Get current date and time
   ***************************************************************
   * new Date() creates a JavaScript Date object
   * It contains:
   *   - Year
   *   - Month
   *   - Day
   *   - Hours, minutes, seconds, etc.
   ***************************************************************/
  const today = new Date();


  /***************************************************************
   * STEP 7 — Get the day of week as a number
   ***************************************************************
   * getDay() returns:
   *   0 → Sunday
   *   1 → Monday
   *   2 → Tuesday
   *   3 → Wednesday
   *   4 → Thursday
   *   5 → Friday
   *   6 → Saturday
   *
   * This is built-in JavaScript behavior.
   ***************************************************************/
  const dayNumber = today.getDay();


  /***************************************************************
   * STEP 8 — Prepare variables for EJS
   ***************************************************************
   * We create two empty variables:
   *  - day      → will store "Monday", "Tuesday", etc.
   *  - message  → will store "Work hard" or "Relax"
   *
   * We will send these to the HTML page.
   ***************************************************************/
  let day = "";
  let message = "";


  /***************************************************************
   * STEP 9 — Check if it is a weekend
   ***************************************************************
   * dayNumber === 0 → Sunday
   * dayNumber === 6 → Saturday
   *
   * If either is true, it's weekend.
   ***************************************************************/
  if (dayNumber === 0 || dayNumber === 6) {

    /*************************************************************
     * If it's Sunday or Saturday, decide which one
     *************************************************************/
    day = dayNumber === 0 ? "Sunday" : "Saturday";

    /*************************************************************
     * Weekend message
     *************************************************************/
    message = "It's the weekend — Relax 😎";

  } else {

    /*************************************************************
     * If it's NOT weekend, it's a weekday
     *************************************************************
     * We create an array to map numbers to names
     *************************************************************/
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    /*************************************************************
     * dayNumber starts from 1 for Monday
     * So we subtract 1 to get correct index
     *************************************************************/
    day = days[dayNumber - 1];

    /*************************************************************
     * Weekday message
     *************************************************************/
    message = "It's a weekday — Work hard 💻";
  }


  /***************************************************************
   * STEP 10 — Render the EJS file
   ***************************************************************
   * res.render("index", {...}) means:
   *
   *  1. Open views/index.ejs
   *  2. Send it variables (day, message)
   *  3. Replace <%= day %> and <%= message %>
   *  4. Send the final HTML to the browser
   ***************************************************************/
  res.render("index", {
    day: day,
    message: message,
  });
});


/***************************************************************
 * STEP 11 — Start the server
 ***************************************************************
 * app.listen() opens the port and starts the server.
 * After this:
 *    http://localhost:3000 becomes active
 ***************************************************************/
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
