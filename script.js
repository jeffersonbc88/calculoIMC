function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const indiceMassaCorporal = peso.value / (altura.value * altura.value)

        if (peso.value === "" && altura.value === "") {
            resultado.innerHTML = `<p>Preencha os dois valores acima para calcular.</p>`;
        } else if (peso.value === "" && altura.value !== "") {
            resultado.innerHTML = `<p>Preencha o peso para calcular.</p>`;
        } else if (peso.value !== "" && altura.value === "") {
            resultado.innerHTML = `<p>Preencha a altura para calcular.</p>`;
        } else if (indiceMassaCorporal < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${indiceMassaCorporal.toFixed(2)} (Abaixo do peso)</p>`;
        } else if (indiceMassaCorporal >= 18.5 && indiceMassaCorporal < 25) {
            resultado.innerHTML = `<p>Seu IMC é ${indiceMassaCorporal.toFixed(2)} (Peso normal)</p>`;
        } else if (indiceMassaCorporal >= 25 && indiceMassaCorporal < 30) {
            resultado.innerHTML = `<p>Seu IMC é ${indiceMassaCorporal.toFixed(2)} (Sobrepeso)</p>`;
        } else if (indiceMassaCorporal >= 30 && indiceMassaCorporal < 35) {
            resultado.innerHTML = `<p>Seu IMC é ${indiceMassaCorporal.toFixed(2)} (Obesidade grau 1)</p>`;
        } else if (indiceMassaCorporal >= 35 && indiceMassaCorporal < 40) {
            resultado.innerHTML = `<p>Seu IMC é ${indiceMassaCorporal.toFixed(2)} (Obesidade grau 2)</p>`;
        } else if (indiceMassaCorporal >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${indiceMassaCorporal.toFixed(2)} (Obesidade grau 3)</p>`;
        }

    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();
