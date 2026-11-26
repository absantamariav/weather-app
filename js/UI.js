import { container, resultado } from "./selectores.js";
import { kelvinACentigrados } from "./funciones.js";

export default class UI {
    mostrarAlerta(texto) {
        const existeAlerta = document.querySelector('.container [data-type="alerta"]')
        if (existeAlerta) {
            existeAlerta.remove();
        }

        const alerta = document.createElement('DIV');
        const strong = document.createElement('STRONG');
        const span = document.createElement('SPAN');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.dataset.type = 'alerta'

        strong.classList.add('font-bold');
        span.classList.add('block');

        strong.textContent = 'Error!';
        span.textContent = `${texto}`;

        alerta.appendChild(strong);
        alerta.appendChild(span);

        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 2500);
    }

    mostrarClima(datos) {
        this.limpiarResultado();
        const { temp, temp_max, temp_min } = datos.main;

        const nombreciudad = document.createElement('P');
        nombreciudad.classList.add('font-bold', 'text-2xl')
        nombreciudad.textContent = `${datos.name}, ${datos.sys.country}`

        const centigrados = kelvinACentigrados(temp);
        const max = kelvinACentigrados(temp_max);
        const min = kelvinACentigrados(temp_min);

        const actual = document.createElement('P');
        actual.classList.add('font-bold', 'text-6xl');
        actual.textContent = `${centigrados} °C`;

        const tempMax = document.createElement('P');
        tempMax.classList.add('text-xl');
        tempMax.textContent = `Max: ${max} °C`;

        const tempMin = document.createElement('P');
        tempMin.classList.add('text-xl');
        tempMin.textContent = `Min: ${min} °C`;

        const resultadoDiv = document.createElement('DIV')
        resultadoDiv.classList.add('text-center', 'text-white', 'resultadoDiv');
        resultadoDiv.appendChild(nombreciudad);
        resultadoDiv.appendChild(actual);
        resultadoDiv.appendChild(tempMax);
        resultadoDiv.appendChild(tempMin);

        resultado.appendChild(resultadoDiv);
    }

    limpiarResultado() {
        const existeResultado = document.querySelector('.resultadoDiv')
        if (existeResultado) {
            existeResultado.remove();
        }
    }
}