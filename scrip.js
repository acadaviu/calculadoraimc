const a = document.getElementById("altura");
const p = document.getElementById("peso");
const pResultado = document.getElementById("resultado");

const but = document.getElementById("boton");
but.addEventListener("click", imc)
function imc()
{
    const alt = parseFloat(a.value);
    const pes = parseFloat(p.value);
    let resultado = pes / (alt * alt);
    if (resultado < 18.5) {
        pResultado.innerHTML = "Su IMC es de: " + resultado + " Estas flac@";
    }
    if (resultado == 18.5 || resultado < 25) {
        pResultado.innerHTML = "Su IMC es de: " + resultado + " IMC Normal";
    }
    if (resultado == 25 || resultado < 29.9 ) {
        pResultado.innerHTML = "Su IMC es de: " + resultado + " Tienes Sobrepeso";
    }
    if (resultado == 30 || resultado < 34.9) {
        pResultado.innerHTML = "Su IMC es de: " + resultado + " Obesidad tipo 1";
    }
    if (resultado == 35 || resultado < 39.9) {
        pResultado.innerHTML = "Su IMC es de: " + resultado + " Obesidad tipo 2";
    }
    if (resultado >= 40) {
        pResultado.innerHTML = "Su IMC es de: " + resultado + " Obesidad tipo 3";
    }
}

