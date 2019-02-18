var txtHeight = document.getElementById('txtHeight'),
        txtWeight = document.getElementById('txtWeight'),
        btnCalc = document.getElementById('btnCalc'),
        res = document.getElementById('res'),
        situacao = document.getElementById('situacao');
        
    txtHeight.addEventListener('keydown', format)
    txtWeight.addEventListener('keydown', format)
    btnCalc.addEventListener('click', calcImc);

    function format (e) {
      if (e.key === ',') e.preventDefault();
    }

    function calcImc () {
        let sit = "";
        let calc = parseFloat(txtWeight.value) / parseFloat(txtHeight.value ** 2);
        res.innerHTML = calc.toFixed(2);
        
        if (calc < 18) sit = "Abaixo do peso";
        else if (calc <= 18 && calc <= 25) sit = "Normal";
        else if (calc <= 25 && calc <= 30) sit = "Sobrepeso";
        else if (calc <= 30 && calc <= 35) sit = "Obeso(a)";
        else sit = "Obesidade moderada";

        situacao.innerHTML = sit;
    }