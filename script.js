function mostrarVideo(source, texto) {
    var container = document.getElementById('video-container');
    var video = document.getElementById('miVideo');
    var descripccion = document.getElementById('texto');  

    container.style.display = 'grid'; 
    if(source) video.src = source
    descripccion.textContent = texto;
    video.play();
}

document.getElementById('perseverancia').addEventListener('click', function() {
    mostrarVideo('vid/pasiva.mp4', 'Regenera salud de forma pasiva cuando no recibe daño por un tiempo, lo que le permite mantenerse en la línea y recuperarse entre intercambios.');
});

document.getElementById('goledecisivo').addEventListener('click', function() {
    mostrarVideo('vid/Q.mp4', 'Ejecuta un ataque potenciado que inflige daño adicional y silencia brevemente al objetivo, ideal para interrumpir hechizos o ganar ventaja en un duelo.');
});

document.getElementById('coraje').addEventListener('click', function() {
    mostrarVideo('vid/W.mp4', 'Otorga un escudo temporal y reducción de daño, aumentando su capacidad para resistir golpes y mantenerse en la línea frontal durante peleas prolongadas.'); 
});

document.getElementById('juicio').addEventListener('click', function() {
    mostrarVideo('vid/E.mp4', 'Garen hace girar su espada rápidamente a su alrededor e inflige daño físico a los enemigos cercanos.');
});


document.getElementById('justicia').addEventListener('click', function() {
    mostrarVideo('vid/R.mp4', 'Garen invoca el poder de Demacia para intentar ejecutar a un campeón enemigo.');
});

function toggleMenu() {
    var nav = document.getElementById("menu");
    if (nav.className === "cerrado") {
        nav.className = "abierto";
    } else {
        nav.className = "cerrado";
    }
}