import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// 🔴 PUT YOUR TOKEN HERE
const yourBearerToken = "";

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

/* ================= GET ================= */
app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(`${API_URL}/secrets/${searchId}`, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

/* ================= POST ================= */
/* Create new secret */
app.post("/post-secret", async (req, res) => {
  try {
    const result = await axios.post(
      `${API_URL}/secrets`,
      {
        secret: req.body.secret,
        score: req.body.score,
      },
      config
    );

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

/* ================= PUT ================= */
/* Replace entire secret */
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.put(
      `${API_URL}/secrets/${searchId}`,
      {
        secret: req.body.secret,
        score: req.body.score,
      },
      config
    );

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

/* ================= PATCH ================= */
/* Update partial fields */
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.patch(
      `${API_URL}/secrets/${searchId}`,
      {
        secret: req.body.secret,
        score: req.body.score,
      },
      config
    );

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

/* ================= DELETE ================= */
app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.delete(
      `${API_URL}/secrets/${searchId}`,
      config
    );

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
