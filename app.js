console.log('Calculadora Simples');

const { exit } = require('process');
var readline = require('readline');
const { isNumberObject } = require('util/types');
const { calcular } = require('./modulos/calculadora');

var entradaDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número 1: \n', function(valor1){
    let numero1 = parseFloat(valor1);

    entradaDados.question('Digite o número 2: \n', function(valor2){
        let numero2 = parseFloat(valor2);

        entradaDados.question('Escolha a operação a ser calculada: somar(+), subtrair (-), multiplicar (*), dividir(/), radiciacao, potencia(ˆ), porcentagem (%)\n', function(opcao){
            let operacao = opcao.toUpperCase();
            let resultado;

            if(resultado = calcular(numero1, numero2, operacao)){
                console.log(resultado);
            }
        });
    });
});

