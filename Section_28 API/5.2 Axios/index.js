import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

// ---------------- MIDDLEWARE ----------------

// Serve static files (CSS)
app.use(express.static("public"));

// Read form data (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// Use EJS
app.set("view engine", "ejs");

// ---------------- GET: HOME ----------------
// When user visits homepage, show a RANDOM activity
app.get("/", async (req, res) => {
  try {
    // Call public API
    const response = await axios.get(
      "https://bored-api.appbrewery.com/random"
    );

    // Axios wraps API response inside .data
    const activity = response.data;

    // Render page with activity data
    res.render("index.ejs", {
      activity,
      error: null,
    });
  } catch (error) {
    // If API fails
    res.render("index.ejs", {
      activity: null,
      error: "Failed to fetch activity. Please try again.",
    });
  }
});

// ---------------- POST: FILTER ----------------
// When user submits form
app.post("/", async (req, res) => {
  const { type, participants } = req.body;

  try {
    // Build query parameters dynamically
    const response = await axios.get(
      "https://bored-api.appbrewery.com/filter",
      {
        params: {
          type: type || undefined,
          participants: participants || undefined,
        },
      }
    );

    // API returns an ARRAY of activities
    const activities = response.data;

    // Pick ONE random activity
    const randomActivity =
      activities[Math.floor(Math.random() * activities.length)];

    res.render("index.ejs", {
      activity: randomActivity,
      error: null,
    });
  } catch (error) {
    // If no matching activities found (404)
    if (error.response && error.response.status === 404) {
      res.render("index.ejs", {
        activity: null,
        error: "No activities that match your criteria.",
      });
    } else {
      res.render("index.ejs", {
        activity: null,
        error: "Something went wrong. Please try again.",
      });
    }
  }
});

// ---------------- SERVER ----------------
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
