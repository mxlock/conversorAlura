function Converter() {
    let input = document.getElementById("valor");
    let value = input.value;
    let valorEmDolar = parseFloat(value);

    let valorEmReal = valorEmDolar * 5.29;

    
    document.getElementById('valorConvertido').innerHTML = 'R$ ' + valorEmReal.toFixed(2) ;
};


