// //menu hamburguesa
const nav =document.querySelector('#nav');
const abrir =document.querySelector('#abrir');
const cerrar=document.querySelector('#cerrar');

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click",() =>{
    nav.classList.remove("visible");
})









/*modo oscuro*/
  const checkbox = document.getElementById('modoOscuro');

  checkbox.addEventListener('change', function() {
	if (this.checked) {
	  document.body.classList.add('dark-mode');
	} else {
	  document.body.classList.remove('dark-mode');
	}
  });