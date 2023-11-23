/*Animación descarga*/
  const downloadLink = document.querySelector('.download-link');

  downloadLink.addEventListener('click', function(event) {
	  event.preventDefault();
  
	  setTimeout(() => {
		  downloadLink.textContent = '¡Archivo Descargado!';
		  console.log('¡Tu archivo ha sido descargado con éxito!');
  
		  // Mostrar un mensaje emergente al usuario cuando se complete la descarga
		  alert('El archivo se ha descargado correctamente.');
  
		  setTimeout(() => {
			  downloadLink.textContent = 'Descargar PDF';
		  }, 2000);
	  }, 1500);
  });
  
 
  document.getElementById('follow').addEventListener('change', function() {
    const instagramLink = document.getElementById('instagramLink');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const subscriptionConfirmation = document.getElementById('subscriptionConfirmation');
    
    if (this.checked) {
        instagramLink.style.color = 'green';
        instagramLink.style.textDecoration = 'underline';
        thankYouMessage.style.display = 'block';
    } else {
        instagramLink.style.color = 'black';
        instagramLink.style.textDecoration = 'none';
        thankYouMessage.style.display = 'none';
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subscriptionConfirmation = document.getElementById('subscriptionConfirmation');
    
    if (!emailRegex.test(email)) {
        alert('Ingrese un correo electrónico válido');
    } else {
        subscriptionConfirmation.style.display = 'block';
    }
});
