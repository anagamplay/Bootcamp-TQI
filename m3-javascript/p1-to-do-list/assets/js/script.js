// let tarefa = document.getElementById("tarefa");
// let lista = document.getElementById("lista");
// let c = 0;

/* <ol>
<li>${task}</li>
</ol> */

// function adicionar() {
//     lista.innerHTML += `<br><input type="checkbox" name="item${c}" class="itens"><label for="item${c}" class="txtitens">${tarefa.value}</label>`;
//     c++;
// }
//document.body.onload = makeList;

let tdLists = document.getElementById('td_lists');
let listName = document.getElementById('list_name');
let task = document.getElementById('task');
let c = 00;
let listId = document.createAttribute('id');
listId.value = 'list'+c;
let listClass = document.createAttribute('class');
listClass.value = ''

function makeList() {
    let newList = document.createElement("p");
    let conteudo = document.createTextNode("Olá, cumprimentos!");
    newList.appendChild(conteudo);
    // let newTitle = document.createElement('h2');
    // newTitle.value = listName;
    // let newOrdered = document.createElement('ol');
    // newList.setAttributeNode(listId);
    document.body.insertBefore(newList, tdLists);
    // document.getElementById(`list${c}`).appendChild(newOrdered);
}