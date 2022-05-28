let tarefa = document.getElementById("tarefa");
let lista = document.getElementById("lista");
let c = 0;

function adicionar() {
    lista.innerHTML += `<br><input type="checkbox" name="item${c}" class="itens"><label for="item${c}" class="txtitens">${tarefa.value}</label>`;
    c++;
}
