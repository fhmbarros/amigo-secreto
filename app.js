//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Lista para adicionar os nomes dos amigos
let amigos = [];


//Função para adicionar nomes à lista amigos.
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("#amigo").value.trim();

    if  (nomeAmigo === ""){
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi incluído.");
        return;
    }

    amigos.push(nomeAmigo);
    limparCampo();  
    atualizarListaAmigos();
    
}


function atualizarListaAmigos() {
    // let lista = document.getElementById("listaAmigos");
    // lista.innerHTML = "";

    // for (let nome in amigos) {
    //     let item = document.createElement('li');
    //     item.textContent = nome;
    //     lista.appendChild(item);
    // }

    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("É preciso adicionar nomes de amigos antes de sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let nomeSorteado = amigos[indiceAleatorio];

    //console.log(nomeSorteado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O nome sorteado foi ${nomeSorteado}.`;
       
}

function limparCampo () {
    document.getElementById("amigo").value = "";
}












