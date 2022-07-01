// let a = 2
// let b = 5
// let intervalo = [];
// let soma = 0;

// for (a; a <= b; a++) {
//     console.log(a)
//     intervalo.push(a);
// }
// console.log(intervalo);

// for (let i = 0; i < intervalo.length; i++) {
//     soma += intervalo[i]
//     console.log(soma);
// }

const ENTRADA_A = 1;
const ENTRADA_B = [1000, 5];
let A = ENTRADA_A;
let B = ENTRADA_B;
let qtdEntradasB = ENTRADA_B.length;

for (let c = 0; c <= qtdEntradasB -1; c++) {
    B = ENTRADA_B[c];
    somaIntervalo();
}

function somaIntervalo(intervalo = [], soma = 0) {

    while (A <= B) {
        intervalo.push(A);
        A++;
    }

    for (let i = 0; i < intervalo.length; i++) {
        soma += intervalo[i];
    }
console.log('intervalo:',intervalo);
console.log('soma:',soma);
A = ENTRADA_A;
}