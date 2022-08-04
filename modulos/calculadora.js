/*
    Objetivo:           Arquivo que contém todas as funções para calculos matemáticos básicos
    Autor:              Arthur Augusto 
    Data de Criação:    01/08/2022
    Versão:             2.0
*/

const { parse } = require("path");

/*método tradicional de criar uma funçao 
  função em formato callback
  muito utilizado js
*/
const calcular = function(valor1, valor2, opcaoCalcular){
    let numero1= valor1;
    let numero2 = valor2;
    let operacao = opcaoCalcular.toUpperCase();
    let resultado;
    let erro = false;

    if(isNaN(numero1) || isNaN(numero2)){
        console.log('Impossivel dividir string');
        exit();
    }

    if(operacao == 'SOMAR' || operacao == '+'){
        resultado = somar(numero1, numero2);
    }else if(operacao == 'SUBTRAIR' || operacao == '-'){
        resultado = subtrair(numero1, numero2);
    }else if(operacao == 'MULTIPLICAR' || operacao == '*'){
        resultado = multiplicar(numero1, numero2);
    }else if(operacao == 'DIVIDIR' || operacao == '/'){
        if(numero2 == 0){
            console.log('Impossível dividir por zero');
        }
        else{
            resultado = dividir(numero1, numero2);
        }
    }else if(operacao == 'RADICIACAO'){
        resultado = radiciacao(numero1, numero2);
    }else if(operacao == 'POTENCIA' || operacao == 'ˆ'){
        resultado = potencia(numero1, numero2);
    }else if(operacao == 'PORCENTAGEM' || operacao == '%'){
        resultado = porcentagem(numero1, numero2);
    }else{
        console.log('Operação inválida')
        erro=true
    }
    if(erro){
        return false;
    }
    else{
        return resultado.toFixed(2);
    }
}

//modelo de função Arrow Function
const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2);
const subtrair= (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2);
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2);
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2);
const radiciacao = (valor1, valor2) => Math.pow(parseFloat(valor1), 1/parseFloat(valor2));
const potencia = (valor1, valor2) => Math.pow(parseFloat(valor1), parseFloat(valor2));
const porcentagem = (valor1, valor2) => parseFloat(valor1)/parseFloat(valor2)*100;
/*
    As funções que serão importadas em outros projetos,
    precisam obrigatoriamente serem incluidas no module.exports
    As funçoes que nao forem incluidas no module.exports irao funcionar,
    no arquivos localmente  
*/

module.exports = {
    calcular
}