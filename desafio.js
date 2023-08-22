/*
Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
*/

let frase = prompt("Digite uma frase")
let palavras = frase.split(" ")
console.log(palavras)

/*
Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
*/

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceAbacaxi = frutas.indexOf("Abacaxi")
console.log("índice do abacaxi: " + indiceAbacaxi + ", " + "tamanho do array: " + frutas.length)