document.getElementById("moreButton").addEventListener("click", function () {
  const extraText = document.getElementById("extraText");
  if (extraText.classList.contains("hidden")) {
    extraText.classList.remove("hidden");
    this.textContent = "Show less";
  } else {
    extraText.classList.add("hidden");
    this.textContent = "Find out more about me";
  }
});
