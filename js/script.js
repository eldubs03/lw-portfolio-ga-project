console.log("JS Loaded!");

const name = "ElDubs";

console.log(name);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("myDropdown is active");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

document
  .getElementById("menu-trigger")
  .addEventListener("click", sideMenuAppears);
document
  .getElementById("menu-close")
  .addEventListener("click", sideMenuDisappears);

function sideMenuAppears() {
  console.log("sideMenuAppears() is active");
  document.getElementById("side-menu").classList.add("show-menu");
}

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
function sideMenuDisappears() {
  console.log("sideMenuDisappears() is active");
  document.getElementById("side-menu").classList.remove("show-menu");
}
