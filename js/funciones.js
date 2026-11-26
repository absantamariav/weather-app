import { ui } from "./variables.js";

export function consultarAPI(ciudad, pais) {
    const apiKey = '0837d2a2a06da359f96c0bcc3facc4c1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

    ui.spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.cod === "404") {
                ui.limpiarResultado();
                ui.mostrarAlerta('Ciudad no encontrada');
            } else {
                ui.mostrarClima(datos);
            }
        })
        .catch(error => {
            ui.limpiarResultado();

            const mensaje = error.message === 'Ciudad no encontrada'
                ? error.message
                : 'Ocurrió un error al consultar el clima. Verifica tu conexión e inténtalo nuevamente.';

            ui.mostrarAlerta(mensaje);
        });
}

export function kelvinACentigrados(grados) {
    return Math.round((grados - 273.15) * 100) / 100;
}