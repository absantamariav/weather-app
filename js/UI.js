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

        alerta.classList.add('bg-red-500', 'text-red-100', 'px-5', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
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

        if (!resultado.firstElementChild) {
            const textoBienvenida = document.createElement('p');
            textoBienvenida.classList.add('text-center', 'text-white', 'mt-6');
            textoBienvenida.textContent = 'Agrega tu ciudad y país, el resultado se mostrará aquí';

            resultado.appendChild(textoBienvenida)
        }
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
        while (resultado.firstElementChild) {
            resultado.firstElementChild.remove();
        }
    }

    spinner() {
        const divSpinner = document.createElement('DIV');
        divSpinner.classList.add('spinner');

        const dot1 = document.createElement('DIV');
        dot1.classList.add('dot1');

        const dot2 = document.createElement('DIV');
        dot2.classList.add('dot2');

        divSpinner.appendChild(dot1);
        divSpinner.appendChild(dot2);

        resultado.appendChild(divSpinner);
    }
}