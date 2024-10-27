const { fileInput } = require("./script");

document
  .querySelector("file-upload")
  .addEventListener("click", () => fileInput.click());
