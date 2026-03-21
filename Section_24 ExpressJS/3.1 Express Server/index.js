import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


// Rough Notes
// sudo lsof -i -P | grep LISTEN
