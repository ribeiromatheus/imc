var txtHeight = document.getElementById('txtHeight'),
    txtWeight = document.getElementById('txtWeight'),
    res = document.getElementById('res'),
    btnCalc = document.getElementById('btnCalc'),
    res = document.getElementById('res'),
    situacao = document.getElementById('situacao');

document.addEventListener('DOMContentLoaded', onFocus);
btnCalc.addEventListener('click', calcular);

function onFocus() {
    txtWeight.focus();
}

function calcular() {
    if (!validate(txtWeight.value, txtHeight.value)) {
        res.innerHTML = calcImc(txtWeight.value, txtHeight.value).toFixed(2);
        situacao.innerHTML = result();
    }
}

function validate(weight, height) {
    let ret = false;

    if (weight == '' || height == '') ret = true;

    return ret;
}

function calcImc(weight, height) {
    return weight / height ** 2;
}

function result() {
    let sit = "";
    let imc = calcImc(txtWeight.value, txtHeight.value);

    if (imc < 18) sit = "Abaixo do peso";
    else if (imc <= 18 && imc <= 25) sit = "Normal";
    else if (imc <= 25 && imc <= 30) sit = "Sobrepeso";
    else if (imc <= 30 && imc <= 35) sit = "Obeso(a)";
    else sit = "Obesidade moderada";

    return sit;
}
