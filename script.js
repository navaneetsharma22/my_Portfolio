const themeToggleButton = document.querySelector(".theme-toggle");
const body = document.body;

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  body.classList.toggle("dark-theme", isDark);

  if (!themeToggleButton) return;

  const icon = themeToggleButton.querySelector("i");
  const label = themeToggleButton.querySelector("span");

  if (icon) {
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  if (label) {
    label.textContent = isDark ? "Light" : "Dark";
  }

  themeToggleButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
};

const savedTheme = localStorage.getItem("portfolio-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (preferredDark ? "dark" : "light");

applyTheme(initialTheme);

themeToggleButton?.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark-theme") ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});
