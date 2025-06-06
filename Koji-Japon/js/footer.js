
fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
        addActiveClass(); // Appeler la fonction après l'injection
    });