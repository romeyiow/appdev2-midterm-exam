//import fs module
const fs = require("fs");

const filename = "message.txt";
const content = "Node.js is awesome!";
const charEncoding = "utf8";

//Synchronously create file: message.txt; content = "Node.js is awesome!"
try {
  fs.writeFileSync(filename, content, {
    encoding: "utf8"
  });
  console.log("File created successfully!");
} catch (err) {
  console.error(`Error: ${err.message}`);
}

//Asynchronously read file: message.txt and log to console
fs.readFile(filename, charEncoding, (err, data) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(`
        ========FILE CONTENT========
        ${data}
        ========END  CONTENT========
        `);

    //delete message.txt after reading; avoids error in deleting -> only delete if read successfully
    fs.unlink(filename, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.error("Error: File not found for deletion!");
        } else {
          console.error("Error deleting file:", err.message);
        }
      } else {
        console.log("File deleted successfully!");
      }
    });
  }
});
