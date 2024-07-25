const works = [
    {   
        title_out : 'ClapCom Studios',
        title: 'Alien Extraction',
        image: 'images/Alien_Extraction.png',
        description: '<b>Alien Extraction is a DIABLO-LIKE game themed in the ALIEN universe.</b><br><br>  Players will take on the role of an elite soldier sent to an alien-infested planet to clear it of all hostile forms. The action focuses on multi-level raids, where players will have to explore, fight against saga enemies, manage their resources carefully to survive and not die in their attempt to complete the mission and discover the truth.',
        additionalMedia: [
            { type: 'image', src: 'images/alien.png' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://clapcom-studios.github.io/Website/'
    },
    {
        title_out : 'Custome Engine: Amarillo Engine',
        title: 'Amarillo Engine',
        image: 'images/Amarillo Logo.png',        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Own_Engine.png'},
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://marcelsunyer.github.io/AmarilloEngine/'
    },
    {
        title_out : 'Nexus Studio: 2D RPG',
        title: 'Dragged Of Time',
        image: 'images/nexus.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://francesctr4.github.io/Nexus-Studios/'
    },
    {
        title_out : 'Guerrilla War Tribute',
        title: 'Guerrilla War',
        image: 'images/GuerrillaWar.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://github.com/ericlr1/Proyecto_1_Guerrilla-War'
    },
    {
        title_out : 'Easing and Splines Tool for C++',
        title: 'Easing and Splines for UI Animations',
        image: 'images/Splines.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://github.com/MarcelSunyer/Easing-and-Splines-for-UI-Animations'
    },
    {
        title_out : 'VR: Escape Room',
        title: 'Escape Room',
        image: 'images/Escape_Room.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://github.com/francesctr4/EscapeRoomVR'
    },
    {
        title_out : 'Advanced Game AI Scene',
        title: 'Advanced-Game-AI-Scene',
        image: 'images/Unity_ia.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://github.com/francesctr4/EscapeRoomVR'
    },
    {
        title_out : '6a CITM GJ: Bat Reverb',
        title: 'Bat Reverb',
        image: 'images/bat.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://github.com/francesctr4/EscapeRoomVR'
    },
    {
        title_out : '7a CITM GJ: Nightmeres',
        title: 'Nightmeres of the night',
        image: 'images/nigthmares.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://github.com/francesctr4/EscapeRoomVR'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const workContainer = document.getElementById('fh5co-work');
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    const popupClose = document.createElement('span');
    popupClose.classList.add('popup-close');
    popupClose.innerHTML = '&times;';
    popupContent.appendChild(popupClose);
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    works.forEach(work => {
        const workItem = document.createElement('div');
        workItem.classList.add('work-item');

        const workImage = document.createElement('img');
        workImage.src = work.image;
        workItem.appendChild(workImage);

        const workTitle = document.createElement('p');
        workTitle.classList.add('work-title');
        workTitle.textContent = work.title_out;
        workTitle.contentEditable = true;  // Mantiene la funcionalidad para editar el título
        workItem.appendChild(workTitle);

        workContainer.appendChild(workItem);

        workItem.addEventListener('click', () => {
            const additionalMediaHTML = work.additionalMedia.map(media => {
                if (media.type === 'image') {
                    return `<img src="${media.src}" alt="${work.title}" class="additional-image">`;
                } else if (media.type === 'video') {
                    return `
                        <video class="additional-video" controls>
                            <source src="${media.src}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>`;
                }
            }).join('');

            popupContent.innerHTML = `
                <span class="popup-close">&times;</span>
                <div>
                    <h3 class="popup-title">${work.title}</h3>
                    <p class="popup-description">${work.description}</p>
                </div>
                <div class="additional-media-container">
                    ${additionalMediaHTML}
                </div>
                <p><a href="${work.link}" target="_blank">Link web</a></p>
            `;
            popupOverlay.style.display = 'flex'; // Cambiado a 'flex' para que use el centrado vertical/horizontal

            document.querySelector('.popup-close').addEventListener('click', () => {
                popupOverlay.style.display = 'none';
            });

            // Ajustar dinámicamente el height después de que se ha agregado el contenido
            const popupContentHeight = popupContent.scrollHeight;
            popupContent.style.height = `${popupContentHeight}px`;
        });
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});