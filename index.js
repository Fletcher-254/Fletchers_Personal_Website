// Add JavaScript for basic interactivity

document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".subtitle");

  subtitle.addEventListener("mouseover", () => {
    subtitle.style.color = "#f8d7da";
    subtitle.style.fontWeight = "bold";
  });

  subtitle.addEventListener("mouseout", () => {
    subtitle.style.color = "white";
    subtitle.style.fontWeight = "normal";
  });
});
