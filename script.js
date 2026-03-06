const goWhats = document.getElementById('goWhats');
imgButton.addEventListener("click", () => {
    popup.classList.toggle("active");

    if (popup.classList.contains("active")) {
        imgButton.src = "./assets/images/hotbar-right.png";
    } else {
        imgButton.src = "./assets/images/hotbar-left.png";
    }
});

goWhats.addEventListener("click", () => {
    const mensagem = encodeURIComponent("Olá! Gostaria de saber um pouco mais sobre o seu trabalho.");
    window.open(`https://wa.me/5551989622580?text=${mensagem}`, "_blank");
});