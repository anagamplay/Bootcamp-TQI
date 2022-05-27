let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0

function decrement() {
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

function red() {
    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }
}