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

var skins = [
    {
        src: 'img/Garen_conVanguardia.webp',
        alt: 'Garen Clásico',
        title: 'Garen Clásico',
        desc: 'La apariencia tradicional del defensor de Demacia.'
    },
    {
        src: 'img/Garen_Judgment_2.webp',
        alt: 'Duelista',
        title: 'Duelista',
        desc: 'Un estilo enfocado en el combate directo y el honor.'
    },
    {
        src: 'img/Garen_Personalidad.png',
        alt: 'Guerrero de Demacia',
        title: 'Guerrero de Demacia',
        desc: 'Fuerza y disciplina reflejadas en su armadura.'
    }
];

var currentSkinIndex = 0;
var displayImage = document.querySelector('.skins-figure img');
var displayTitle = document.querySelector('.skins-figure h3');
var displayDesc = document.querySelector('.skins-figure p');
var thumbButtons = document.querySelectorAll('.skins-thumb');
var prevSkinButton = document.querySelector('.skins-nav.prev');
var nextSkinButton = document.querySelector('.skins-nav.next');

function updateSkin(index) {
    if (index < 0) index = skins.length - 1;
    if (index >= skins.length) index = 0;
    currentSkinIndex = index;
    var skin = skins[index];
    if (displayImage) {
        displayImage.src = skin.src;
        displayImage.alt = skin.alt;
    }
    if (displayTitle) displayTitle.textContent = skin.title;
    if (displayDesc) displayDesc.textContent = skin.desc;
    thumbButtons.forEach(function(button) {
        button.classList.toggle('active', Number(button.dataset.index) === index);
    });
}

thumbButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var index = Number(this.dataset.index);
        updateSkin(index);
    });
});

if (prevSkinButton) {
    prevSkinButton.addEventListener('click', function() {
        updateSkin(currentSkinIndex - 1);
    });
}

if (nextSkinButton) {
    nextSkinButton.addEventListener('click', function() {
        updateSkin(currentSkinIndex + 1);
    });
}

updateSkin(0);

function toggleMenu() {
    var nav = document.getElementById("menu");
    if (nav.className === "cerrado") {
        nav.className = "abierto";
    } else {
        nav.className = "cerrado";
    }
}