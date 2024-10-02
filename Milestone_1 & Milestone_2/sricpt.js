var toggleButton = document.getElementById("toggel-skills");
var skill = document.getElementById("skill");
toggleButton.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
