console.log('alô alô, graças a Deus!');

var vHora = document.querySelector('#valor-hora');
    vHora.addEventListener('change', function(){
        console.log(vHora.value);
    });

var hProjeto = document.querySelector('#horas-projeto');
    hProjeto.addEventListener('change', function(){
        console.log(hProjeto.value);
    });

var resultado = document.querySelector('#resposta');

function calcular(){
    var valorTotal = vHora.value * hProjeto.value;
    console.log(valorTotal);

    resultado.innerHTML = "R$" + valorTotal.toLocaleString();
}
