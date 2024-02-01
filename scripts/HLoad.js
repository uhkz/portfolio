$(document).ready(function () {
  // Load the header.html into the #header-container
  $("#header-container").load("../pages/header.html", function () {
    // This function is a callback that executes after the content is loaded
    // Attach the event listener here
    document
      .querySelector("#theme-switcher")
      .addEventListener("click", switchTheme);
  });
});
