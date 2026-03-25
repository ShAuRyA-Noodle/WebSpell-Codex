import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware
function bandNamegenerator(req, res, next) {
  console.log(req.body);
  req.bandName = req.body.street + req.body.pet; // attach to request
  next();
}
app.use(bandNamegenerator);

// Serve HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Use middleware only for /submit
app.post("/submit", bandNamegenerator, (req, res) => {
  res.send(`Your band name is: ${req.bandName}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
