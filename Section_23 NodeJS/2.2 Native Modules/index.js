const fs = require("fs");

// fs.writeFile(
//   "shaurya.txt",
//   "Hi Shaurya, I am writing from the index.js file",
//   (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   }
// );

// "utf8" is important while reading the file 
fs.readFile("shaurya.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File content:");
  console.log(data);
});
