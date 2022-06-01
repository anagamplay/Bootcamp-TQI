(
function calculadora() {
    const OPERATION = prompt(
        `Escolha uma opção:
        1 - Adição (+)
        2 - Subtração (-)
        3 - Multiplicação (*) 
        4 - Divisão real (/)
        5 - Divisão inteira (%)
        6 - Potenciação (**)`
    );
    
    if (OPERATION == undefined || OPERATION > 6 || OPERATION < 1) {
        alert(`[ERRO] Tente digitar um número de 1 a 6`);
        calculadora();
    };

    if(OPERATION == 1) {
        addition();
    };

    // Subtração
    if(OPERATION == 2) {
        subtraction();
    };

    // Multiplicação
    if(OPERATION == 3) {
        multiplication();
    };

    // Divisão real
    if(OPERATION == 4) {
        division();
    };

    // Divisão inteira
    if(OPERATION == 5) {
        mudulos();
    };

    // Potenciação
    if(OPERATION == 6) {
        exponentiation();
    };
}
)();

function addition(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} + ${n2} = ${n1 + n2}.`);
    playAgain();
};

function subtraction(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} - ${n2} = ${n1 - n2}.`);
    playAgain();
};

function multiplication(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} x ${n2} = ${n1 * n2}.`);
    playAgain();
};

function division(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} / ${n2} = ${n1 / n2}.`);  
    playAgain();
};

function mudulos(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} % ${n2} = ${n1 % n2}.`);  
    playAgain(); 
};

function exponentiation(n1, n2){
    n1 = Number(prompt(`Digite o primeiro número:`));
    n2 = Number(prompt(`Digite o segundo número:`));

    alert(`Resultado: ${n1} ** ${n2} = ${n1 ** n2}.`);
    playAgain();  
};

function playAgain() {
    const PLAY_AGAIN = prompt(
        `Deseja fazer outra operação? s/n`
    );
    
    PLAY_AGAIN == 's' ? calculadora() : alert('Obrigada por fazer operações! Até mais!');
};