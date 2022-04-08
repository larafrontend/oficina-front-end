console.log ('hello, plablo vitar');

//ganho-mes

//horas-dia

var valorSalario = document.querySelector('#ganho-mes');
valorSalario.addEventListener('change', function(){
    console.log(valorSalario.value);
});

var horasPorDia = document.querySelector('#horas-dia');
horasPorDia.addEventListener('change', function(){
    console.log(horasPorDia.value);
});

function calcularValorHora(){
    var horasNoMes = horasPorDia.value * 22;
    console.log(horasNoMes);

    var valorHora = valorSalario.value / horasNoMes;
    console.log(valorHora)

    resultado.innerHTML = "R$" + valorHora.toFixed(2);
};

var resultado = document.querySelector('#resposta');
