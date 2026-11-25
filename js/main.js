import {
    container,
    formulario,
    ciudadInput,
    paisSelect
} from './selectores.js'

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if (ciudadInput.value.trim() === "" || paisSelect.value === "") {
        return;
    }
    console.log('suelta tu ha');

}