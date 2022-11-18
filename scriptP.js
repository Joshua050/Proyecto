var btnAbrirModal = document.getElementById("btn-abrir-modal");
var btnCerrarModal = document.getElementById("btn-cerrar-modal");
var modal = document.getElementById("modal");

btnAbrirModal.addEventListener("click",()=>{
	modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
	modal.close();
})