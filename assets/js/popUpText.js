// This toggle will allow text up appear on submit of the sign up form and on the contact form as the same ID is held.
function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}