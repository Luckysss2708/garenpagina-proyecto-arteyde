// Función genérica para mostrar el video
function mostrarVideo(source, texto) {
    var container = document.getElementById('video-container');
    var video = document.getElementById('miVideo');
    var texto = document.getElementById('texto');  

    container.style.display = 'grid'; // Todos en GRID
    if(source) video.src = source
    texto.textContent = texto;
    video.play();
}

// Evento para Perseverancia
document.getElementById('perseverancia').addEventListener('click', function() {
    mostrarVideo('tu-video.mp4', 'Perseverancia');
});

// Evento para Golpe Decisivo (ID corregido)
document.getElementById('goledecisivo').addEventListener('click', function() {
    mostrarVideo('tu-video2.mp4');
});

document.getElementById('juicio').addEventListener('click', function() {
    mostrarVideo('tu-video2.mp4');
});

document.getElementById('coraje').addEventListener('click', function() {
    mostrarVideo('tu-video2.mp4');
});

document.getElementById('justicia').addEventListener('click', function() {
    mostrarVideo('tu-video2.mp4');
});


