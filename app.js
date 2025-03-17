//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Lista para adicionar os nomes dos amigos

let amigos = [];

//Função para adicionar nomes à lista amigos.
function adicionarAmigo() {
    let nomeAmigo = document.getElementsById("amigo").value.trim();

    if  (nomeAmigo == ""){
        alert("Por favor, insira um nome válido.");
    }

    amigos.push(nomeAmigo);

    document.getElementById("amigo").value = "";

    return;
    
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let nome in amigos) {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.append(item);
    }
}












