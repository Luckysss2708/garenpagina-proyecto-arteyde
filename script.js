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
    mostrarVideo('vid/pasiva.mp4', 'Si Garen no se ha visto afectado recientemente por ataques o habilidades de enemigos, regenera un porcentaje de su vida máxima cada segundo.');
});

document.getElementById('goledecisivo').addEventListener('click', function() {
    mostrarVideo('vid/Q.mp4', 'Garen obtiene un aumento de velocidad de movimiento y se libra de todas las ralentizaciones. Su siguiente ataque golpea una zona vital de su enemigo, lo que inflige daño adicional y lo silencia.');
});

document.getElementById('coraje').addEventListener('click', function() {
    mostrarVideo('vid/W.mp4', 'Garen aumenta de forma pasiva su armadura y su resistencia mágica al asesinar a enemigos. También puede activar esta habilidad para obtener un escudo y una mejora de tenacidad durante un breve periodo de tiempo, seguido de una reducción de daño menor que dura más.'); 
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