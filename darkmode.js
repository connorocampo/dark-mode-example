function toggleThemeColor() {
  var themeColor = document.body;
  themeColor.classList.toggle("dark-mode");

  var elCode = document.querySelectorAll(".code");
  for (var i = 0; i < elCode.length; i++) {
    elCode[i].classList.toggle("dark-code");
  }

  var elPre = document.getElementById("pre");
  elPre.classList.toggle("dark-pre");

  var elAnchor = document.getElementById("link");
  elAnchor.classList.toggle("dark-anchor");

  var icon = document.getElementById("icon");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}
