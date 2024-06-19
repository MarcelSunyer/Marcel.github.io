const works = [
    {
        title: 'Trabajo 1',
        image: 'images/Alien_Extraction.jpg',
        description: 'Descripción del Trabajo 1',
        additionalMedia: [
            { type: 'image', src: 'images/Alien_Extraction.jpg' },
            { type: 'video', src: 'videos/Dragged_Off_Time.mp4' }
        ],
        link: 'https://link1.com'
    },
    {
        title: 'Trabajo 2',
        image: 'images/work2.jpg',
        description: 'Descripción del Trabajo 2',
        additionalMedia: [
            { type: 'image', src: 'images/work2_1.jpg' },
            { type: 'image', src: 'images/work2_2.jpg' }
        ],
        link: 'https://link2.com'
    }
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
                <p><a href="${work.link}" target="_blank">Learn more</a></p>
            `;
            popupOverlay.style.display = 'block';

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