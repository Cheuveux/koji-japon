window.addEventListener("load", function() {
    let loader = document.getElementById("loader");
    
    // Ajoute la classe qui déclenche l'animation de disparition
    loader.classList.add("loader-hidden");

    // Supprime complètement le loader après la transition
    setTimeout(() => {
        loader.style.display = "none";
    }, 1200); // Correspond au temps de transition en CSS (0.8s)
});