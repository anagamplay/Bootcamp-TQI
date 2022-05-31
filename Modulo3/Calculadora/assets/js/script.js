function calculadora(n1, n2) {
    n1 = undefined;
    n2 = undefined;

    const OPERATION = (prompt(
        `Escolha uma opção:
        1 - Adição (+)
        2 - Subtração (-)
        3 - Multiplicação (*) 
        4 - Divisão real (/)
        5 - Divisão inteira (%)
        6 - Potenciação (**)`
    ));
    
    if (OPERATION == '' || OPERATION > 6 || OPERATION < 1) {
        console.log(typeof(OPERATION));
        alert(`[ERRO] Tente digitar um número de 1 a 6`);
    }

    // if (typeof(n1) == 'string') {
    //     alert(`[ERRO] Tente digitar um número`)
    // }

    if(OPERATION == 1) {
        addition()
    }
    // Adição
    /*
    if(OPERATION == 1) {
        n1 = prompt(`Digite o primeiro número:`);
        n2 = prompt(`Digite o segundo número:`);
        console.log();
        console.log(n2);
        if (n1 || n2 == ""){
            prompt(`ERRO Digite um número`)
        }
        alert(`Resultado: ${n1} + ${n2} = ${n1 + n2}.`)
        var playAgain = prompt(
            `Deseja fazer outra operação? s/n`
        );
        
    }
*/

    // Subtração
    if(OPERATION == 2) {
        n1 = Number(prompt(`Digite o primeiro número:`));
        n2 = Number(prompt(`Digite o segundo número:`));
        alert(`Resultado: ${n1} - ${n2} = ${n1 - n2}.`);
    }

    // Multiplicação
    if(OPERATION == 3) {
        n1 = Number(prompt(`Digite o primeiro número:`));
        n2 = Number(prompt(`Digite o segundo número:`));
        alert(`Resultado: ${n1} x ${n2} = ${n1 * n2}.`);
    }

    // Divisão real
    if(OPERATION == 4) {
        n1 = Number(prompt(`Digite o primeiro número:`));
        n2 = Number(prompt(`Digite o segundo número:`));
        alert(`Resultado: ${n1} / ${n2} = ${n1 / n2}.`);
    }

    // Divisão inteira
    if(OPERATION == 5) {
        n1 = Number(prompt(`Digite o primeiro número:`));
        n2 = Number(prompt(`Digite o segundo número:`));
        alert(`Resultado: ${n1} % ${n2} = ${n1 % n2}.`);
    }

    // Potenciação
    if(OPERATION == 6) {
        n1 = Number(prompt(`Digite o primeiro número:`));
        n2 = Number(prompt(`Digite o segundo número:`));
        alert(`Resultado: ${n1} ** ${n2} = ${n1 ** n2}.`);
    }

    //playAgain == 's' ? calculadora() : 'Obrigada por fazer operações! Até mais!'
}

calculadora()

function addition(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} + ${n2} = ${n1 + n2}.`)

    var playAgain = prompt(
        `Deseja fazer outra operação? s/n`
    );

    playAgain == 's' ? calculadora() : 'Obrigada por fazer operações! Até mais!'
}

function subtraction(n1, n2){

}

function multiplication(n1, n2){
    
}

function division(n1, n2){
    
}

function mudulos(n1, n2){
    
}

function exponentiation(n1, n2){
    
}