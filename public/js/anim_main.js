window.addEventListener("load", function() {
    const mains = document.querySelectorAll('main');
    mains.forEach(main => {
        main.classList.add('loaded');
    });
});