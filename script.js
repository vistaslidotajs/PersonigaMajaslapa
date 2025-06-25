window.onload = function () {
  const gads = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = `© ${gads} Filips Bībers`;

  const toggleButton = document.getElementById("toggle-dark-mode");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
};
