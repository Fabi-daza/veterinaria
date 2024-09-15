const selectCiudad = document.getElementById('ciudad');
const selectComuna = document.getElementById('comuna');

selectCiudad.addEventListener('change', () =>{
    if(selectCiudad.value){
        selectComuna.disabled = false;
    }else{
        selectComuna.disabled = true
    }
})

function validarFormulario(){
    const campos = document.querySelectorAll("input[data-validacion], select[data-validacion]");

    for (let i = 0; i < campos.length; i++) {
        const campo = campos[i];
        const tipoValidacion = campo.getAttribute("data-validacion");
        const valorCampo = campo.value.trim();

        switch(tipoValidacion){
            case 'nombreapellido':
                if(valorCampo.length === 0){
                    alert("El campo nombre es obligatorio");
                    return false;
                }
                break;
            case 'nombremascota':
                if(valorCampo.length === 0){
                    alert("El campo nombre de la mascota es obligatorio");
                    return false;
                }
                break;
            case 'rut':
                if(valorCampo.length === 0){
                    alert("El campo rut es obligatorio");
                    return false;
                }else if(!validarRUT(valorCampo)){
                    alert("El rut ingresado no es válido");
                    return false;
                }
                break;
            case 'email':
                if(valorCampo.length === 0){
                    alert("El campo email es obligatorio");
                    return false;
                }else if(!validarEmail(valorCampo)){
                    alert("El email ingresado no es válido");
                    return false;
                }
                break;
            case 'fecha':
                if(valorCampo.length === 0){
                    alert("El campo fecha es obligatorio");
                    return false;
                }
                break;
            case 'horario':
                if(valorCampo === ''){
                    alert("El campo horario es obligatorio");
                    return false;
                }
                break;
            case 'ciudad':
                if(valorCampo === ''){
                    alert("El campo ciudad es obligatorio");
                    return false;
                }
                break;
            case 'comuna':   
                if(valorCampo === ''){
                    alert("El campo comuna es obligatorio");
                    return false;
                }
                break;
            case 'checkbox':
                const checkboxes = document.querySelectorAll('input[data-validacion="checkbox"]');
                checkboxSeleccionado = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;

                if(checkboxSeleccionado < 2){
                    alert("Debes seleccionar al menos dos opciones");
                    return false;
                }
                break;
            }
            alert("Reserva generada de forma exitosa");
            return true;
        }
    }

function reservar(){
    
}