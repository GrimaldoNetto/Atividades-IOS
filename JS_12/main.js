function calcularTabuada() {
    var valorInput = document.getElementById('valor').value;
    var valor = parseInt(valorInput);

    if (!isNaN(valor)) {
        var resultado = '';

        for (var i = 1; i <= 10; i++) {
            var multiplicacao = valor * i;
            resultado += valor + ' x ' + i + ' = ' + multiplicacao + '<br>';
        }
        document.getElementById('resultado').innerHTML = resultado;
    }
}
