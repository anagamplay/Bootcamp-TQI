let tarefaWrapper = document.getElementById("tarefa");
let listaWrapper = document.getElementById("lista");
let c = 0;

function adicionar() {
    listaWrapper.innerHTML += `<br><input type="checkbox" name="item${c}" class="itens"><label for="item${c}" class="txtitens">${tarefaWrapper.value}</label>`;
    c++;
}

