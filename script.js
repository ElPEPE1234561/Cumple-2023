var image = document.getElementById("my-image");
var alternateImage = document.getElementById("alternate-image");
var rotateButton = document.getElementById("rotate-button");
var textFields = document.getElementById("text-fields");
var downloadButton = document.getElementById("download-button");
var firstNameInput = document.getElementById("first-name-input");

function showTextFields() {
  rotateButton.style.display = "none";
  textFields.style.display = "block";
}

function rotateImage() {
  image.style.display = "none";
  alternateImage.style.display = "block";
  showTextFields();
}

function addText() {
  var firstName = document.getElementById("first-name-input").value;
  var lastName = document.getElementById("last-name-input").value;
  var textOverlay = document.getElementById("text-overlay");
  textOverlay.textContent = firstName + " " + lastName;
  showDownloadButton();
}

function showDownloadButton() {
  downloadButton.style.display = "inline-block";
  downloadButton.style.position = "static";
}

function checkDownloadButton() {
  var nameValue = firstNameInput.value.toLowerCase();
  if (nameValue === "R5#7rKs9!qY2") {
    showDownloadButton();
  } else {
    downloadButton.style.display = "none";
  }
}

function downloadImage() {
  var imageUrl = document.getElementById("alternate-image").src;
  var link = document.createElement("a");
  link.href = imageUrl;
  link.download = "yo.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

