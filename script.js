const answers = [
    "¿Estás segura, mi Osa? 🥺",
    "¡Piénsalo bien! 🐻",
    "Mira que el botón de SÍ se hace más grande...",
    "¡Te vas a perder la sorpresa! ✨",
    "¡Anda, dale que sí! ❤️",
    "Déjate querer, mi princesita... 💕",
    "No te dejaré ir tan fácil 💖",
    "¡Hazle caso a tu corazón! 🌌"
];

const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
let i = 0;

noButton.addEventListener('click', () => {
    noButton.innerText = answers[i];
    i = (i + 1) % answers.length;
    
    // Hace el botón de SÍ más grande en cada intento
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
    yesButton.style.padding = `${parseFloat(window.getComputedStyle(yesButton).paddingTop) * 1.3}px ${parseFloat(window.getComputedStyle(yesButton).paddingLeft) * 1.3}px`;
});
