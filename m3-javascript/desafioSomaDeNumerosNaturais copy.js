let entradaA = 1;
let entradaB = [1000, 5];
let A = entradaA;
let B;
let input = entradaB.length;
let qtdEntradasB = input;

for (let c = 0; c <= qtdEntradasB -1; c++) {
    input = entradaB[c];
    B = input;
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
  console.log(soma);
  A = entradaA;
}