
document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");

    button.id = "backToTop";
    button.type = "button";
    button.textContent = "↑";
    button.setAttribute("aria-label", "맨 위로 이동");

    document.body.appendChild(button);

    function toggleButton() {
        button.classList.toggle("visible", window.scrollY > 200);
    }

    window.addEventListener("scroll", toggleButton);
    toggleButton();

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
