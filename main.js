/*
const op = require('./operation')
// const op = require('./operation.js') possible mais bug avec node
// on import le fichier operation pour calculer avec sur notre fichier différent


const { add } = require('./operation')
pour n'importer qu'un (ou des points) special (aux)  du fichier operation
pratique dans le fichier a importer est gros qu'on a besoin que d'une partie

console.log(op.add(10, 11))

console.log(op.sub(12, 11))
console.log(op.mul(2,10))
console.log(op.div(10, 2))
console.log(op.modulo(10, 2))
*/
/*
const { ADD_OP, SUB_OP, MUL_OP, DIV_OP, MOD_OP} = requestAnimationFrame('./constants')
const { add, sub, mul, div, modulo} = require('./operation')
exports.calc = (op, nb1, nb2) =>{
    switch(op){
        case ADD_OP:
            return add(nb1, nb2)
        case SUB_OP:
            return sub(nb1, nb2)
        case MUL_OP:
            return mul(nb1, nb2)
        case DIV_OP:
            return div(nb1, nb2)
        case MOD_OP:
            return modulo(nb1, nb2)
        default:
            return `Unknow operator ${op}`
    }
}
*/
const readline = require('readlineSync')
const chalk = require('chalk')
const {calc}= require('./calc')

while (true) {
//console.log(calc('*', 10, 10))
const op = readlineSync.question('Operation: ')
/* 
demander l'operation
 demander nb1
 demander nb2
*/

let nb1 = readlineSync.question('nb1: ')
nb1 = Number(nb1Str)
//deuxieme façon de faire mais moins utilisé

const nb2 = Number(readlineSync.question('nb2: '))

console.log(chalk.green.bold(calc(op, nb1, nb2)))
}