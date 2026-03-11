const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");

const saved = localStorage.getItem("theme");

if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
}

let currentTheme = document.documentElement.getAttribute("data-theme");

if (currentTheme === "dark") {
    icon.className = "fa-solid fa-sun";
} else {
    icon.className = "fa-solid fa-moon";
}

toggle.onclick = () => {

    let current = document.documentElement.getAttribute("data-theme");
    let newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
};