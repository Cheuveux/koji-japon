

function sendEmail () {
  const email = document.getElementById('email').value; //  Adresse email de l'utilisateur
  const name = document.getElementById('name').value; // Nom de l'utilisateur
  const contactReason = document.getElementById('contactReason').value;
  const subject= `Message en provenance du site Koji-Japon.org - ${contactReason}`; // Sujet du mail
  const message = document.getElementById('message').value;



  // VERIFICATION DE MAIL
  if(!validateEmail (email)) {
    alert ("Adresse e-mail invalide.");
    return;
  }

  // Utilisation d'EmailJS pour envoyer le mail
  emailjs.send ("service_xkz218k", "template_h3bhp6b", {
    email: email,
    name: name,
    subject: subject,
    message: message
  })

.then(function (response) {
    console.log('YIPAHOUOPAH !', response.status, response.text);
    document.getElementById ('successMessage').classList.remove('hidden');
  }, function (error) {
    console.log('OUPS !', error);
    document.getElementById ('errorMessage').classList.remove('hidden');
  }
 
);
  document.getElementById("contactForm").reset();

}
  
  // Fonction pour valider l'email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
 
  