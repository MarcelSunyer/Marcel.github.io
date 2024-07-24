const works = [
    {   
        title_out : 'ClapCom: Alien Extraction',
        title: 'Alien Extraction',
        image: 'images/Alien_Extraction.png',
        description: 'Descripción del Trabajo 1,Descripción del Trabajo 1,Descripción del Trabajo 1,Descripción del Trabajo 1,Descripción del Trabajo 1,',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://clapcom-studios.github.io/Website/'
    },
    {
        title_out : 'Own Engine',
        title: 'Amarillo Engine',
        image: 'images/Amarillo Logo.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Own_Engine.png'},
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://marcelsunyer.github.io/AmarilloEngine/'
    },
    {
        title_out : '2D RPG',
        title: 'Dragged Of Time',
        image: 'images/Dragged_Off_Time.png',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://francesctr4.github.io/Nexus-Studios/'
    },
    {
        title_out : 'Guerrilla War',
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
        title_out : 'Advanced-Game-AI-Scene',
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
        title_out : 'Bat Reverb',
        title: 'Bat Reverb',
        image: 'images/Unity_ia.png',
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
        workTitle.contentEditable = true;  // Makes the title editable
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
                <h3>${work.title}</h3>
                <p>${work.description}</p>
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