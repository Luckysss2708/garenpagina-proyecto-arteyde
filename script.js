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

var skins = [
    {
        src: 'img/skins/Garen_OriginalSkin.jpg',
        alt: 'Garen Original',
        title: 'Original',
        desc: 'La apariencia original de Garen en Demacia.'
    },

    {
        src: 'img/skins/Garen_BattleAcademiaSkin.jpg',
        alt: 'Garen Battle Academia',
        title: 'Battle Academia',
        desc: 'Garen en un estilo inspirado en academias de élite y combate futurista.'
    },
    {
        src: 'img/skins/Garen_CommandoSkin.jpg',
        alt: 'Garen Commando',
        title: 'Commando',
        desc: 'Una versión más táctica y militar del guerrero de Demacia.'
    },
    {
        src: 'img/skins/Garen_DemaciaViceSkin.jpg',
        alt: 'Garen Demacia Vice',
        title: 'Demacia Vice',
        desc: 'Estilo retro con colores brillantes y actitud de película de acción.'
    },
    {
        src: 'img/skins/Garen_DesertTrooperSkin.jpg',
        alt: 'Garen Desert Trooper',
        title: 'Desert Trooper',
        desc: 'Garen adaptado a un campo de batalla árido y militarizado.'
    },
    {
        src: 'img/skins/Garen_DreadknightSkin.jpg',
        alt: 'Garen Dreadknight',
        title: 'Dreadknight',
        desc: 'Una versión oscura y temible del caballero de Demacia.'
    },
    {
        src: 'img/skins/Garen_FallenGod-KingSkin.jpg',
        alt: 'Garen Fallen God-King',
        title: 'Fallen God-King',
        desc: 'Apariencia mística y poderosa, casi divina.'
    },
    {
        src: 'img/skins/Garen_God-KingSkin.jpg',
        alt: 'Garen God-King',
        title: 'God-King',
        desc: 'El rey divino con armadura y presencia imponente.'
    },
    {
        src: 'img/skins/Garen_MechaKingdomsSkin.jpg',
        alt: 'Garen Mecha Kingdoms',
        title: 'Mecha Kingdoms',
        desc: 'Una interpretación futurista con poder mecanizado.'
    },
    {
        src: 'img/skins/Garen_MythmakerSkin.jpg',
        alt: 'Garen Mythmaker',
        title: 'Mythmaker',
        desc: 'Una estética clásica con toques de mitología y fantasía.'
    },
    {
        src: 'img/skins/Garen_PenguSkin.jpg',
        alt: 'Garen Pengu',
        title: 'Pengu',
        desc: 'Una skin divertida y más tierna del guerrero demaciano.'
    },
    {
        src: 'img/skins/Garen_PrestigeMechaKingdomsSkin.jpg',
        alt: 'Garen Prestige Mecha Kingdoms',
        title: 'Prestige Mecha Kingdoms',
        desc: 'La versión prestigiosa y dorada de Mecha Kingdoms.'
    },
    {
        src: 'img/skins/Garen_RogueAdmiralSkin.jpg',
        alt: 'Garen Rogue Admiral',
        title: 'Rogue Admiral',
        desc: 'Garen como un capitán rebelde al mando de su flota.'
    },
    {
        src: 'img/skins/Garen_RuggedSkin.jpg',
        alt: 'Garen Rugged',
        title: 'Rugged',
        desc: 'Aspecto rudo y resistente, listo para la batalla en el campo.'
    },
    {
        src: 'img/skins/Garen_SanguineSkin.jpg',
        alt: 'Garen Sanguine',
        title: 'Sanguine',
        desc: 'Una skin con colores oscuros y una vibra siniestra.'
    },
    {
        src: 'img/skins/Garen_SteelLegionSkin.jpg',
        alt: 'Garen Steel Legion',
        title: 'Steel Legion',
        desc: 'La clásica armadura metálica de la Legión de Acero.'
    },
    {
        src: 'img/skins/Garen_VisionsoftheFallenSkin.jpg',
        alt: 'Garen Visions of the Fallen',
        title: 'Visions of the Fallen',
        desc: 'Una apariencia elegante y visionaria del héroe demaciano.'
    },
    {
        src: 'img/skins/Garen_WarringKingdomsSkin.jpg',
        alt: 'Garen Warring Kingdoms',
        title: 'Warring Kingdoms',
        desc: 'Una skin épica con motivación histórica y fragmentos de batalla.'
    }
];

var currentSkinIndex = 0;
var displayImage = document.querySelector('.skins-figure img');
var displayTitle = document.querySelector('.skins-figure h3');
var displayDesc = document.querySelector('.skins-figure p');
var thumbContainer = document.querySelector('.skins-thumbs');
var prevSkinButton = document.querySelector('.skins-nav.prev');
var nextSkinButton = document.querySelector('.skins-nav.next');

if (thumbContainer) {
    skins.forEach(function(skin, index) {
        var button = document.createElement('button');
        button.className = 'skins-thumb' + (index === 0 ? ' active' : '');
        button.dataset.index = index;
        button.setAttribute('aria-label', 'Seleccionar ' + skin.title);

        var thumbImg = document.createElement('img');
        thumbImg.src = skin.src;
        thumbImg.alt = skin.alt;
        button.appendChild(thumbImg);

        button.addEventListener('click', function() {
            updateSkin(index);
        });

        thumbContainer.appendChild(button);
    });
}

var thumbButtons = thumbContainer ? thumbContainer.querySelectorAll('.skins-thumb') : [];
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

