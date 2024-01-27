let titulo = document.querySelector('h1');
titulo.innerHTML ='Hora do desafio';
function clicarNobotao() {
    console.log('O botao foi acessado!')
}
function EuamoJs() {
    alert('Eu amo js!')
}
function CidaDes() {
 let nomedaCidade =  prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
 alert(`Estivem em ${nomedaCidade} e lembrei de você`)
}
    function SomaDosnumeros() {
        let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
        let segundoNumero = parseInt(prompt('Digite o segundo número'));
        let resultado = primeiroNumero + segundoNumero;
        alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
    }