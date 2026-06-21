import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

/* ======================================================
   AUTH CREDENTIALS (FILL THESE IN)
   ====================================================== */
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});



/* ======================================================
   HOME
   ====================================================== */
app.get("/", (req, res) => {
  res.render("index.ejs", {
    content: "Choose an authentication method from the routes.",
  });
});

/* ======================================================
   1. NO AUTH
   Public endpoint: /random
   ====================================================== */
app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/random`);

    // Convert JS object → readable string
    res.render("index.ejs", {
      content: JSON.stringify(response.data, null, 2),
    });
  } catch (error) {
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

/* ======================================================
   2. BASIC AUTH
   Endpoint: /all?page=2
   Uses username + password
   ====================================================== */
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      params: {
        page: 2, // only page 2
      },
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });

    res.render("index.ejs", {
      content: JSON.stringify(response.data, null, 2),
    });
  } catch (error) {
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

/* ======================================================
   3. API KEY AUTH
   Endpoint: /filter?score=5
   API key passed as query param
   ====================================================== */
app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/filter`, {
      params: {
        score: 5,          // embarrassment score >= 5
        apiKey: yourAPIKey // API key auth
      },
    });

    res.render("index.ejs", {
      content: JSON.stringify(response.data, null, 2),
    });
  } catch (error) {
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

/* ======================================================
   4. BEARER TOKEN AUTH
   Endpoint: /secrets/42
   Token sent in Authorization header
   ====================================================== */
app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });

    res.render("index.ejs", {
      content: JSON.stringify(response.data, null, 2),
    });
  } catch (error) {
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

/* ======================================================
   SERVER
   ====================================================== */
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
