document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");

    titulo.addEventListener("click", () => {
        titulo.textContent = "¡Has hecho clic en el título!";
        titulo.style.color = "red";
    });
});
