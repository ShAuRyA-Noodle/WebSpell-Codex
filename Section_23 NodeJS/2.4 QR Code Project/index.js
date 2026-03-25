// Import inquirer library
// This allows us to ask questions to the user in the terminal
import inquirer from "inquirer";

// Import qr-image library
// This converts text (like a URL) into a QR code image
import qr from "qr-image";

// Import Node.js built-in file system module
// This lets us create and write files on the computer
import fs from "fs";


// Ask the user to enter a URL
// "await" pauses the program until the user types something
const answers = await inquirer.prompt([
  {
    // The key name where the user's input will be stored
    name: "url",

    // The message shown to the user in the terminal
    message: "Enter the URL to generate QR code:",
  },
]);


// Extract the entered URL from the answers object
const url = answers.url;


// Generate a QR code image from the entered URL
// This creates a stream of QR image data in memory
const qrImage = qr.image(url);


// Create a file called "qr_img.png" and stream the QR code into it
// This saves the QR code as an image on disk
qrImage.pipe(fs.createWriteStream("qr_img.png"));


// Write the entered URL into a text file called "URL.txt"
fs.writeFile("URL.txt", url, (err) => {
  // If any error occurs while saving, stop the program
  if (err) throw err;

  // If successful, show confirmation
  console.log("URL saved to URL.txt");
});


// Final message to confirm QR code creation
console.log("QR code generated as qr_img.png");
