const button = document.querySelector("button#button");
const text = document.querySelector("#textbutton");

button.addEventListener("click", () => {
  text.toggleAttribute("hidden");
});
