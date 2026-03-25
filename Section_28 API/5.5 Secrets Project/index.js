import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

/* Serve static files (CSS, images, etc.) */
app.use(express.static("public"));

/* Set EJS as templating engine */
app.set("view engine", "ejs");

/* Home route */
app.get("/", async (req, res) => {
  try {
    // Call the API
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );

    // Extract values
    const secret = response.data.secret;
    const user = response.data.username;

    // Send to EJS
    res.render("index.ejs", {
      secret: secret,
      user: user,
    });
  } catch (error) {
    console.error(error.message);
    res.render("index.ejs", {
      secret: "Failed to load secret",
      user: "",
    });
  }
});

/* Start server */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
