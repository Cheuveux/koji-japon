document.addEventListener('DOMContentLoaded', () => {
    let slideContainers = document.querySelectorAll('.evenement-diapo');

    slideContainers.forEach((container) => {
        let slides = container.getElementsByClassName('img-slide');
        let slideIndex = 0;

        // Appliquer le format (portrait/landscape) à chaque image et video
        Array.from(slides).forEach((slide) => {
            let img = slide.querySelector('img');
            let video = slide.querySelector('video');

            if (img) {
                img.onload = () => {
                    if (img.naturalWidth > img.naturalHeight) {
                        img.classList.add('landscape');
                    } else {
                        img.classList.add('portrait');
                    }
                };
            }

            if (video) {
                video.onloadedmetadata = () => {
                    if (video.videoWidth > video.videoHeight) {
                        video.classList.add('landscape');
                    } else {
                        video.classList.add('portrait');
                    }
                };
            }
        });

        // Initialisation du diaporama
        showSlides(slideIndex, container, slides);

        // Ajouter les écouteurs d'événements aux boutons
        container.querySelector('.prev')?.addEventListener('click', () => plusSlides(-1, container, slides));
        container.querySelector('.next')?.addEventListener('click', () => plusSlides(1, container, slides));
    });
});

// Fonction pour changer de slide
function plusSlides(n, container, slides) {
    let currentIndex = Array.from(slides).findIndex(slide => slide.style.display !== 'none');
    showSlides(currentIndex + n, container, slides);
}

// Fonction pour afficher les slides
function showSlides(n, container, slides) {
    if (n >= slides.length) { n = 0; }
    if (n < 0) { n = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "flex";
}
