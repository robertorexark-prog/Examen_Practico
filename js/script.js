const miAudio = document.getElementById('musica-fondo');

// Ajustamos el volumen al 20% (puedes cambiar este valor entre 0.0 y 1.0)
miAudio.volume = 0.2;

function activarMusica() {
    miAudio.play()
        .then(() => {
            console.log("Música iniciada por interacción del usuario.");

            // Removemos los event listeners para que no intente reproducir cada vez que te muevas
            eventosInteraccion.forEach(evento => {
                window.removeEventListener(evento, activarMusica);
            });
        })
        .catch(error => {
            console.log("Esperando una interacción más directa para reproducir:", error);
        });
}

const eventosInteraccion = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart'];

eventosInteraccion.forEach(evento => {
    window.addEventListener(evento, activarMusica, { passive: true });
});