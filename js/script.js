//* eventos-animaciones */
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const btnBack1 = document.getElementById('btn-back1');

form1.addEventListener("submit", function (e) {
    e.preventDefault();

    // ocultamos el form1
    form1.classList.remove('animate-in-left');
    form1.classList.add('animate-out-left');

    // mostramos el form2
    form2.classList.remove('hidden', 'animate-out-right');
    form2.classList.add('animate-in-right');

    // Ocultar después de la animación
    setTimeout(() => {
        form1.classList.add('hidden');
        form1.classList.remove('animate-out-left');
    }, 500);

    //   aplicamos los eventos al boton del form1
})
btnBack1.addEventListener('click', function () {
    // Ocultar form2 con animación
    form2.classList.remove('animate-in-right');
    form2.classList.add('animate-out-right');

    // Mostrar form1 con animación
    form1.classList.remove('hidden', 'animate-out-left');
    form1.classList.add('animate-in-left');

    setTimeout(() => {
        form2.classList.add('hidden');
        form2.classList.remove('animate-out-right');
    }, 500);
});


/* --------VALIDACIONES-------- */
// funcion validacion de inputs numeros/strings(util para todos) */
function validaInput(input, patern, msnError) {
    // eliminamos espacios en blanco
    const valor = input.value.trim();
    if (patern.test(valor)) {
        input.setCustomValidity("");
    } else {
        input.setCustomValidity(msnError);
    }
    input.reportValidity();
}

/* validacion del nombre de calle*/
document.querySelector("#nomCalle").addEventListener("input", function () {

    let patron4 = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?:[ ]?[A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/;
    let calle = this.value;
    if (calle.length <= 25 && patron4.test(calle)) {
        validaInput(this, patron4, "solo texto; ejem: calle de los alcanfores")
    }else{
        validaInput(this, patron4, "solo texto; ejem:los alcanfores")
    }

})
/* evento para campo de CP*/
document.querySelector("#cp").addEventListener("input", function () {
    this.value = this.value.trim();
    let patron1 = /^[0-9]{5}$/;
    validaInput(this, patron1, "ingrese números(5 dígitos)")
})
/* evento para campo nro de calle*/
document.querySelector("#numCalle").addEventListener("input", function () {
    this.value = this.value.trim();
    let patron2 = /^[0-9]{1,5}$/;
    validaInput(this, patron2, "ingrese números(1 a 5 dígitos)")
});

/* evento para validar el piso */
document.querySelector("#piso").addEventListener("input", function () {
    this.value = this.value.trim();
    let patron3 = /^[0-9]{1,5}[A-Za-z]?$/i;
    validaInput(this, patron3, "use tipo 2a, 2A,5B...")
})

/* funcion para validar el nro del portal eventinput desde el formulario */
function validaPortal() {
    const portal = document.querySelector("#numPortal");
    portal.value = portal.value.trim();
    const validPatron = /^[0-9]{1,5}(-[A-Za-z0-9])?$/i;
    if (portal.value === "" || validPatron.test(portal.value)) {
        portal.setCustomValidity("");
    } else {
        portal.setCustomValidity("Ingrese tipo: 1-A; 4-a; 2-1;123...");
    }
    portal.reportValidity();
}

/* funcion para validar el piso */

