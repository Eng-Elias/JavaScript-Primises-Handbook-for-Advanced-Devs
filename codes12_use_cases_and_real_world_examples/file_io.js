const fs = require("fs").promises;

fs.readFile("file.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
