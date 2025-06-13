let nome = document.getElementById('nome')
let data = document.getElementById('data')
let erro = document.getElementById('erro')

const dataCorreta = '13/06/2008'
const nomeCorreto = 'myrelle rayanne santos da silva'

data.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5, 9);

    e.target.value = value;
  });

function Acessar(){
    let dataDigitada = data.value;

    if (nome.value.toLowerCase() !== nomeCorreto || dataDigitada !== dataCorreta) {
        erro.innerHTML = '**Preencha os dados corretamente**'
    } else {
        window.location.href = 'src/html/FelizAniversario.html'
    }
}
