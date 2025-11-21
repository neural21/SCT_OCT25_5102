const toggle = document.getElementById("themeToggle");
let darkMode = false;

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkMode = !darkMode;

    document.querySelector(".theme-icon").src =
        darkMode ? "skillcraft/moon.svg" : "skillcraft/sun.svg";
});
