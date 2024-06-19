document.addEventListener('DOMContentLoaded', () => {
    const works = [
        {
            title: 'Trabajo 1',
            image: 'images/Alien_Extraction.jpg',
            description: 'Descripción del Trabajo 1',
            additionalImages: ['images/ASD.jpg', 'images/GameLogo.jpg'],
            link: 'https://link1.com'
        },
        {
            title: 'Trabajo 2',
            image: 'images/work2.jpg',
            description: 'Descripción del Trabajo 2',
            additionalImages: ['images/work2_1.jpg', 'images/work2_2.jpg'],
            link: 'https://link2.com'
        }
    ];

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
            popupContent.innerHTML = `
                <span class="popup-close">&times;</span>
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                ${work.additionalImages.map(img => `<img src="${img}" alt="${work.title}">`).join('')}
                <p><a href="${work.link}" target="_blank">Learn more</a></p>
            `;
            popupOverlay.style.display = 'block';

            document.querySelector('.popup-close').addEventListener('click', () => {
                popupOverlay.style.display = 'none';
            });
        });
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});