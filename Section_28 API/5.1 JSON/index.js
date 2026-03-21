import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// ---------------- PATH FIX (ES MODULES) ----------------

// Required because you're using "type": "module"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- MIDDLEWARE ----------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// ---------------- LOAD JSON FILE ----------------

// Read JSON file as STRING
const data = fs.readFileSync(
  path.join(__dirname, "recipe.json"),
  "utf-8"
);

// Convert JSON → JavaScript object
const recipes = JSON.parse(data);

// ---------------- ROUTES ----------------

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: null });
});

app.post("/recipe", (req, res) => {
  const choice = req.body.choice;

  // Find recipe dynamically (scalable)
  const recipe = recipes.find(r =>
    r.name.toLowerCase().includes(choice)
  );

  res.render("index.ejs", { recipe });
});

// ---------------- SERVER ----------------

app.listen(port, () => {
  console.log(`🔥 Server running on port ${port}`);
});
