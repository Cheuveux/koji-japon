fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        addActiveClass(); // Appeler la fonction après l'injection
    });

function addActiveClass() {
    const navLinks = document.querySelectorAll('.navLink'); // Tous les liens du menu (desktop et mobile)
    const currentPath = window.location.pathname; // Chemin actuel complet

    console.log("Chemin actuel :", currentPath); // Pour debug

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname; // Chemin absolu de chaque lien
        console.log(`Comparaison : ${linkPath} === ${currentPath}`); // Pour debug

        // Comparer les chemins
        if (linkPath === currentPath) {
    link.classList.add('active');
    console.log("Classe 'active' ajoutée à :", link);

    // Pour desktop : chercher le h1 dans le lien
    const h1Element = link.querySelector('.japNav');
    if (h1Element) {
        h1Element.classList.add('current');
        console.log("Classe 'current' ajoutée au H1 :", h1Element);
    }

    // Pour mobile : chercher le h1 frère précédent
    const h1Sibling = link.previousElementSibling;
    if (h1Sibling && h1Sibling.tagName === 'H1') {
        h1Sibling.classList.add('current');
        console.log("Classe 'current' ajoutée au H1 (mobile):", h1Sibling);
    }
}
    });
}
