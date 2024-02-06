$(document).ready(function () {
  $("#header-container").load("../pages/header.html", function () {
    document
      .querySelector("#theme-switcher")
      .addEventListener("click", switchTheme);
  });
});
