const theme = document.querySelector(".theme__toggle-js");
const dark = document.querySelector(".theme__toggle--dark");
const light = document.querySelector(".theme__toggle--light");

light.style.display = 'none';

dark.addEventListener("click", function () {
       dark.style.display = 'none';
       light.style.display = 'flex';
       document.body.classList.add("dark-theme");
});

light.addEventListener("click", function () {
    light.style.display = 'none';
    dark.style.display = 'flex';
    document.body.classList.remove("dark-theme");
});

