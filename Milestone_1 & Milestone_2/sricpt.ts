const toggleButton = document .getElementById("toggel-skills") as HTMLButtonElement
const skill = document .getElementById("skill") as HTMLElement

toggleButton.addEventListener("click", ()=> {
  if(skill.style.display === "none"){
    skill.style.display = "block"
  } else{
    skill.style.display = "none"
  }
});