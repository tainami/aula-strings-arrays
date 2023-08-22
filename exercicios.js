// Exercício 1 
let array
console.log('a. ', array) // a. undefined 

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 8 

// Exercício 2 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NO ÔNIBUS EM MIRROCOS, 26

// Exercício 3 
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu email")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Exercício 4 
let comidasFav = ["sushi", "gelato", "hamburguer", "massa", "pizza"]
console.log(comidasFav)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFav[0])
console.log(comidasFav[1])
console.log(comidasFav[2])
console.log(comidasFav[3])
console.log(comidasFav[4])
let comidaFavUsuario = prompt("Digite sua comida favorita")
comidasFav[1] = comidaFavUsuario
console.log("Comidas favoritas com a do usuário: ") 
console.log(comidasFav)

// Exercício 5 
let listaDeTarefas = [] 
let tarefaUm = prompt("Digite sua primeira tarefa do dia")
let tarefaDois = prompt("Digite sua segunda tarefa do dia")
let tarefaTres = prompt("Digite sua terceira tarefa do dia")
listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)
console.log("Lista de tarefas: ") 
console.log(listaDeTarefas)

let excluirTarefa = Number(prompt("Qual tarefa foi concluída?"))
listaDeTarefas.splice(excluirTarefa, 1)
console.log("Lista de tarefas atualizada: ") 
console.log(listaDeTarefas)

