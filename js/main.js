import {
    formulario,
    ciudadInput,
    paisSelect
} from './selectores.js'

import { ui } from './variables.js'
import { consultarAPI } from './funciones.js';

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {

    e.preventDefault();
    if (ciudadInput.value.trim() === "" || paisSelect.value === "") {
        ui.mostrarAlerta('Todos los campos son obligatorios');
        return;
    }
    // ui.spinner();
    consultarAPI(ciudadInput.value.trim(), paisSelect.value);
}